export const mockUsers = [
  {
    user_id: 1,
    name: 'سارة محمد العتيبي',
    national_id: '1234567890',
    phone: '0553262424',
    email: 'beneficiary@example.com',
    disability_type: 'حركية',
    role_id: 5,
    status: 'active',
  },
]

export const mockServices = [
  {
    service_id: 1,
    service_name: 'طلب أجهزة تعويضية',
    slug: 'assistive-devices',
    short_description: 'خدمة مخصصة لدعم المستفيدين بالأجهزة التعويضية المناسبة حسب الحاجة.',
    full_description: 'تمكن هذه الخدمة المستفيد من طلب جهاز تعويضي يساعده في تحسين جودة الحياة والاستقلالية اليومية.',
    price: 450,
    require_case_study: true,
    service_type_options: ['direct_paid', 'conditional_free'],
    icon: 'Accessibility',
    image: 'assistive-devices.png',
  },
  {
    service_id: 2,
    service_name: 'طلب نقل باص لذوي الإعاقة',
    slug: 'accessible-bus',
    short_description: 'خدمة نقل ميسرة تساعد المستفيد على الوصول للمواعيد أو الخدمات.',
    full_description: 'تتيح هذه الخدمة طلب نقل مناسب للأشخاص ذوي الإعاقة وفق التوفر والحاجة.',
    price: 80,
    require_case_study: true,
    service_type_options: ['direct_paid', 'conditional_free'],
    icon: 'Bus',
    image: 'accessible-bus.png',
  },
  {
    service_id: 3,
    service_name: 'طلب صيانة كراسي متحركة',
    slug: 'wheelchair-maintenance',
    short_description: 'خدمة صيانة للكراسي المتحركة لضمان سلامة الاستخدام.',
    full_description: 'يمكن للمستفيد طلب صيانة كرسي متحرك ومتابعة حالة الطلب حتى اكتمال الخدمة.',
    price: 120,
    require_case_study: true,
    service_type_options: ['direct_paid', 'conditional_free'],
    icon: 'Wrench',
    image: 'wheelchair-maintenance.png',
  },
  {
    service_id: 4,
    service_name: 'طلب تطويع البيئة وترميم المنزل',
    slug: 'home-accessibility',
    short_description: 'خدمة تهدف إلى تحسين بيئة المنزل لتناسب احتياجات المستفيد.',
    full_description: 'تشمل الخدمة دراسة احتياج المنزل للتعديلات المناسبة مثل المداخل والممرات ووسائل السلامة.',
    price: 1200,
    require_case_study: true,
    service_type_options: ['direct_paid', 'conditional_free'],
    icon: 'Home',
    image: 'home-accessibility.png',
  },
  {
    service_id: 5,
    service_name: 'طلب كسوة',
    slug: 'clothing-support',
    short_description: 'خدمة دعم عيني للمستفيدين حسب الحاجة والتوفر.',
    full_description: 'تساعد هذه الخدمة في تقديم الكسوة للمستفيدين بعد تقديم الطلب ومراجعته.',
    price: 150,
    require_case_study: true,
    service_type_options: ['direct_paid', 'conditional_free'],
    icon: 'Shirt',
    image: 'clothing-support.png',
  },
  {
    service_id: 6,
    service_name: 'طلب علاج طبيعي وتخاطب',
    slug: 'therapy-speech',
    short_description: 'خدمة علاجية وتأهيلية تشمل العلاج الطبيعي أو التخاطب.',
    full_description: 'تتيح هذه الخدمة طلب جلسات علاج طبيعي أو تخاطب وفق احتياج المستفيد وتقييم الحالة.',
    price: 200,
    require_case_study: true,
    service_type_options: ['direct_paid', 'conditional_free'],
    icon: 'HeartPulse',
    image: 'therapy-speech.png',
  },
]

export const mockRequests = [
  {
    request_id: 1001,
    user_id: 1,
    service_id: 1,
    request_type: 'conditional_free',
    date: '2026-07-05T10:30:00',
    status: 'بانتظار دراسة الحالة',
    current_step: 'case_study_review',
    can_confirm_receipt: false,
    can_rate: false,
  },
  {
    request_id: 1002,
    user_id: 1,
    service_id: 3,
    request_type: 'direct_paid',
    date: '2026-07-03T14:15:00',
    status: 'جاري مراجعة الدفع',
    current_step: 'payment_review',
    payment: {
      transaction_id: 501,
      request_id: 1002,
      amount_paid: 120,
      payment_method: 'bank_transfer',
      payment_status: 'under_review',
      account_holder_name: 'سارة محمد العتيبي',
      receipt_file: 'receipt-demo.pdf',
    },
    can_confirm_receipt: false,
    can_rate: false,
  },
  {
    request_id: 1003,
    user_id: 1,
    service_id: 2,
    request_type: 'direct_paid',
    date: '2026-06-29T09:00:00',
    status: 'مكتمل',
    current_step: 'completed',
    payment: {
      transaction_id: 502,
      request_id: 1003,
      amount_paid: 80,
      payment_method: 'bank_transfer',
      payment_status: 'paid',
      account_holder_name: 'سارة محمد العتيبي',
      receipt_file: 'receipt-bus.pdf',
    },
    delivery: {
      delivery_id: 701,
      request_id: 1003,
      execution_date: '2026-07-01',
      beneficiary_confirm: false,
    },
    can_confirm_receipt: true,
    can_rate: false,
  },
]

export const mockCaseStudies = [
  { case_id: 301, researcher_id: 4, user_id: 1, request_id: 1001, decision: 'قيد الدراسة', support_ratio: null },
]

export const mockStats = [
  { key: 'beneficiaries', label: 'مستفيد مسجل', value: 1250, icon: 'Users' },
  { key: 'devices', label: 'طلب أجهزة تعويضية', value: 230, icon: 'Accessibility' },
  { key: 'transport', label: 'طلب نقل ميسر', value: 185, icon: 'Bus' },
  { key: 'maintenance', label: 'طلب صيانة', value: 147, icon: 'Wrench' },
  { key: 'satisfaction', label: 'رضا المستفيدين', value: '94%', icon: 'ThumbsUp' },
]

export const mockAbout = {
  title: 'جمعية ذوي الإعاقة ببريدة «عزم»',
  paragraphs: [
    'تأسست جمعية ذوي الإعاقة ببريدة «عزم» تحت مسمى الجمعية الخيرية لرعاية وتأهيل المعاقين ببريدة في تاريخ 11 / 4 / 1431هـ، برقم تسجيل (563) في وزارة الموارد البشرية والتنمية الاجتماعية، وتم تعديل اسمها إلى جمعية ذوي الإعاقة ببريدة «عزم».',
    'جاءت فكرة تأسيسها نتيجة خبرة طويلة وممارسة فعلية لمؤسسيها في مجال العمل الخيري، ورغبة منهم في تقديم خدمات التأهيل والرعاية لأبناء المنطقة من ذوي الإعاقة ودمجهم في المجتمع.',
    'ثم تطور الهدف بعد ذلك إلى إيجاد كوادر وطنية مدربة لتقديم خدمات التأهيل والرعاية لذوي الإعاقة.',
  ],
  vision:
    'تحقيق التنمية البشرية المستدامة من خلال تقديم الخدمات الشاملة لتأهيل ورعاية الأشخاص ذوي الإعاقة ودمجهم في المجتمع، بحيث يكونوا قيمة مضافة للوطن.',
}

export const mockGoals = [
  { text: 'رعاية ذوي الإعاقة وتقديم الخدمات العلاجية والوقائية لهم.', icon: 'HeartPulse' },
  { text: 'تقديم خدمات التأهيل الاجتماعي والتدريب المهني والتقني ودمج المستفيدين بالمجتمع.', icon: 'GraduationCap' },
  { text: 'تقديم الوسائل المساعدة والخدمات الفنية والتدريبية لأسر المستفيدين.', icon: 'HandHeart' },
  { text: 'بث الوعي وتعميق مفهوم خدمة ذوي الإعاقة في إطار المجتمع.', icon: 'Megaphone' },
]

export const mockContact = {
  whatsapp: 'https://wa.me/966553262424',
  email: 'info@azem.org.sa',
  phone: 'tel:0163850120',
  social: {
    twitter: 'https://www.twitter.com/scrdisa',
    snapchat: 'https://www.snapchat.com/add/scrdisa',
    instagram: 'https://www.instagram.com/scrdisa',
    youtube: 'https://www.youtube.com/@Azem-sa',
    tiktok: 'https://www.tiktok.com/@scrdisa',
  },
}

export const paymentMethods = [
  { id: 'bank_transfer', name: 'التحويل البنكي', enabled: true, fields: ['account_holder_name', 'receipt_file'] },
  { id: 'online_payment', name: 'الدفع الإلكتروني', enabled: false, coming_soon: true },
]
