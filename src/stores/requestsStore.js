import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { mockRequests } from '../data/mockData'
import { useServicesStore } from './servicesStore'

export const useRequestsStore = defineStore('requests', () => {
  const requests = ref([...mockRequests])
  const latestMessage = ref('')

  const enrichedRequests = computed(() => {
    const servicesStore = useServicesStore()
    return requests.value.map((request) => ({
      ...request,
      service: servicesStore.getServiceById(request.service_id),
    }))
  })

  function createRequest(payload) {
    const request = {
      request_id: Date.now(),
      user_id: payload.user_id,
      service_id: payload.service_id,
      request_type: payload.request_type,
      date: new Date().toISOString(),
      status: payload.request_type === 'direct_paid' ? 'جاري مراجعة الدفع' : 'بانتظار دراسة الحالة',
      current_step: payload.request_type === 'direct_paid' ? 'payment_review' : 'case_study_review',
      payment: payload.payment,
      can_confirm_receipt: false,
      can_rate: false,
    }

    requests.value.unshift(request)
    latestMessage.value = 'تم إرسال الطلب التجريبي بنجاح.'
    return request
  }

  function getRequestById(requestId) {
    return enrichedRequests.value.find((request) => request.request_id === Number(requestId))
  }

  function confirmReceipt(requestId) {
    const request = requests.value.find((item) => item.request_id === Number(requestId))
    if (!request) return
    request.status = 'تم تأكيد الاستلام'
    request.current_step = 'receipt_confirmed'
    request.can_confirm_receipt = false
    request.can_rate = true
    request.delivery = { ...request.delivery, request_id: request.request_id, beneficiary_confirm: true }
    latestMessage.value = 'تم تأكيد استلام الخدمة.'
  }

  function rateRequest(requestId, rating) {
    const request = requests.value.find((item) => item.request_id === Number(requestId))
    if (!request) return
    request.status = 'تم التقييم'
    request.current_step = 'rated'
    request.can_rate = false
    request.rating = { rating_id: Date.now(), request_id: request.request_id, ...rating }
    latestMessage.value = 'شكراً لك، تم حفظ التقييم التجريبي.'
  }

  return { requests, enrichedRequests, latestMessage, createRequest, getRequestById, confirmReceipt, rateRequest }
})
