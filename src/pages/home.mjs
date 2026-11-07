import { site } from '../../site.config.mjs';
import { esc, mark, wordmark, footer, t } from '../layout.mjs';

const copy = {
  en: {
    title: 'Scan to Flow: barcode & QR scanner that sends to your webhook',
    description:
      'Scan codes into your own form, save offline, and send every record as JSON to any webhook or API, such as n8n. No account, no backend.',
    nav: { how: 'How it works', features: 'Features', screens: 'Screens', pro: 'Pro', faq: 'FAQ', get: 'Get the app' },
    menu: 'Menu',
    eyebrow: 'Barcode · QR · Webhook',
    h1: ['Scan.', 'Connect.', 'Automate.'],
    lede: 'The scanner that fills <em class="not-italic text-mist">your own form</em> and sends every record to <em class="not-italic text-mist">your webhook or API</em>. No account. No backend. Open the app and start scanning.',
    appStore: 'Download on the App Store',
    play: 'Get it on Google Play',
    chips: ['iOS & Android', 'No account', 'Works offline', 'JSON over HTTPS'],
    termTitle: 'Live record',
    sending: 'Sending…',
    sent: 'Delivered · 200 OK',
    heroAlt: 'Scan to Flow camera scanning a shipping label, with a Sent confirmation',
    tickerLabel: 'Field types',
    fields: ['Barcode', 'QR code', 'Code list', 'Text', 'Number', 'Checkbox', 'Dropdown', 'Quick choice', 'Date & time', 'Timestamp', 'UUID', 'Constant', 'Sequence', 'Operator', 'Photo'],
    how: {
      kicker: 'How it works',
      title: 'From a code on a box<br class="hidden sm:block"> to a row in your workflow.',
      steps: [
        ['Scan', 'Point the camera at a barcode or QR code. One code per record, or a whole box in a row.'],
        ['Your form fills itself', 'The code lands in the right field and the form moves to the next one. Quantity, location, photo: you decide what a record holds.'],
        ['It flows to your server', 'The record is saved on your phone first, then sent as JSON to your webhook or API. If sending fails, it waits and retries.'],
      ],
    },
    feat: {
      kicker: 'Features',
      title: 'Small app. Serious workflow.',
      sub: 'Everything a scan needs between the camera and your server, and nothing in the way when you just want to scan.',
      form: ['Build the form you need', '15 field types, required fields and pinned values. Start from a template, then make it yours. Share a form with your team as a file; secret values are never included.'],
      modes: ['Five ways to scan', ['One code per record', 'Several fields in a chain', 'Continuous scanning', 'Code lists', 'Several codes in one view <span class="text-amber">(beta)</span>']],
      dupes: ['Catch duplicates instantly', 'Warn, block, or add up a quantity when the same code comes back.', 'Already scanned, not added', 'Added'],
      offline: ['Offline first. Never lose a scan.', 'Every record is saved on the device first. Unsent records wait in a queue and are never removed automatically. Sending runs while the app is open.', ['Sent', 'Waiting', 'Failed · 422']],
      webhook: ['Send to any webhook or API', 'JSON with custom headers, one record or a batch, automatic retries with the same record ID on every attempt. See your server’s response right after a scan.'],
      export: ['Export to CSV & Excel', 'Take your records anywhere: CSV, XLSX, or a ZIP that includes the photos.'],
      secrets: ['Secrets stay secret', 'Destination URLs and secret headers live in the iOS Keychain or Android Keystore, never in exports, logs or analytics.'],
    },
    screens: { kicker: 'Screens', title: 'See it in action.', prev: 'Previous screens', next: 'Next screens' },
    shots: [
      ['hero', 'Scan straight into your workflow', 'Camera scanning a shipping label, with a Sent confirmation'],
      ['form', 'Your form fills itself', 'Stock count form filled after a scan, sending to n8n'],
      ['webhook', 'Send to any webhook or API', 'Sample JSON request that the server receives'],
      ['offline', 'Offline first. Never lose a scan.', 'History with waiting, failed and sent records'],
      ['duplicates', 'Catch duplicates instantly', 'A repeated scan blocked with a message'],
      ['templates', 'Count stock. Check in. Receive.', 'Form templates: Quick scan, Stock count, Check-in, Receiving'],
      ['continuous', 'Scan many codes in a row', 'Receiving form scanning a list of codes into a box'],
      ['export', 'Export to CSV & Excel', 'Export sheet with CSV and XLSX options'],
    ],
    uses: {
      kicker: 'Templates',
      title: 'Ready for the jobs you scan every day.',
      sub: 'Pick a template and start in seconds. Every field can be renamed, removed or extended.',
      items: [
        ['Quick scan', 'One code, one timestamp. The fastest way to a list.'],
        ['Stock count', 'Product code, quantity and a location that stays pinned between scans.'],
        ['Check-in', 'Scan a ticket or badge and record when each person arrived.'],
        ['Receiving', 'Scan the box, then every item inside it, and note its condition.'],
      ],
    },
    privacy: {
      kicker: 'Privacy',
      title: 'Your data stays yours.',
      points: [
        ['No account, no backend', 'There is no Scan to Flow server. Nothing to sign up for.'],
        ['Only where you send it', 'Form data, scanned values and photos go only to the destinations you set.'],
        ['Minimal, anonymous analytics', 'Usage events and crash reports never include what you scan. Turn analytics off in Settings.'],
        ['Non-personalized ads', 'The free version never asks to track you and never reads the advertising ID.'],
      ],
      link: 'Read the Privacy Policy',
    },
    pro: {
      kicker: 'Free & Pro',
      title: 'Free to start. Pro when it’s part of the job.',
      free: ['Free', 'Every feature, with limits', ['All field types, scan modes and templates', '20 successful send requests per install', 'Export up to the newest 100 records', 'Non-personalized ads']],
      pro: ['Pro', 'For daily use', ['No ads, anywhere', 'Unlimited sends', 'Unlimited export', 'Monthly or yearly subscription']],
      note: 'Prices are shown in the app, in your local currency. Records held by a limit stay safely in the queue and are never lost.',
    },
    faq: {
      kicker: 'FAQ',
      title: 'Questions, answered.',
      items: [
        ['Do I need an account?', 'No. Open the app and start scanning. The only setup is choosing your language once.'],
        ['Which servers can it send to?', 'Any HTTP endpoint that accepts JSON: an n8n webhook, Google Apps Script, Make, your own API. You can add custom headers, such as an authorization token.'],
        ['Does it work without internet?', 'Yes. Scanning, editing and history work offline. Records wait in a queue and are sent when you are back online with the app open.'],
        ['What happens when sending fails?', 'The record stays on your phone, marked as failed or waiting, and is retried with the same record ID, so your server can safely ignore duplicates. Unsent records are never removed automatically.'],
        ['Can the developer see my scans?', 'No. Form data, scanned values, photos, URLs and headers are never sent to the developer. Only anonymous usage events and crash reports are, and you can turn analytics off in Settings.'],
        ['How do I cancel Pro?', 'Pro is managed by the App Store or Google Play. Cancel any time in your store account’s subscription settings, at least 24 hours before the period renews.'],
      ],
    },
    cta: { title: 'Point. Scan. Done.', sub: 'Free on iOS and Android.' },
  },

  vi: {
    title: 'Scan to Flow: quét mã vạch & QR, gửi thẳng tới webhook của bạn',
    description:
      'Quét mã vào biểu mẫu của riêng bạn, lưu offline và gửi từng bản ghi dạng JSON tới webhook hoặc API bất kỳ như n8n. Không cần tài khoản, không có máy chủ trung gian.',
    nav: { how: 'Cách hoạt động', features: 'Tính năng', screens: 'Màn hình', pro: 'Pro', faq: 'Hỏi đáp', get: 'Tải ứng dụng' },
    menu: 'Menu',
    eyebrow: 'Mã vạch · QR · Webhook',
    h1: ['Quét.', 'Kết nối.', 'Tự động hoá.'],
    lede: 'Ứng dụng quét mã điền vào <em class="not-italic text-mist">biểu mẫu của riêng bạn</em> và gửi từng bản ghi tới <em class="not-italic text-mist">webhook hoặc API của bạn</em>. Không cần tài khoản. Không có máy chủ trung gian. Mở app là quét được ngay.',
    appStore: 'Tải trên App Store',
    play: 'Tải trên Google Play',
    chips: ['iOS & Android', 'Không cần tài khoản', 'Chạy offline', 'JSON qua HTTPS'],
    termTitle: 'Bản ghi trực tiếp',
    sending: 'Đang gửi…',
    sent: 'Đã gửi · 200 OK',
    heroAlt: 'Camera của Scan to Flow đang quét nhãn vận chuyển, kèm xác nhận Đã gửi',
    tickerLabel: 'Loại trường',
    fields: ['Mã vạch', 'Mã QR', 'Danh sách mã', 'Văn bản', 'Số', 'Hộp chọn', 'Danh sách thả xuống', 'Chọn nhanh', 'Ngày giờ', 'Dấu thời gian', 'UUID', 'Hằng số', 'Số thứ tự', 'Người vận hành', 'Ảnh'],
    how: {
      kicker: 'Cách hoạt động',
      title: 'Từ mã trên thùng hàng<br class="hidden sm:block"> đến một dòng trong quy trình của bạn.',
      steps: [
        ['Quét', 'Đưa camera vào mã vạch hoặc QR. Mỗi mã một bản ghi, hoặc quét liên tiếp cả thùng hàng.'],
        ['Biểu mẫu tự điền', 'Mã được điền vào đúng trường, rồi biểu mẫu tự chuyển sang trường tiếp theo. Số lượng, vị trí, ảnh: bạn quyết định bản ghi gồm những gì.'],
        ['Tự chảy về máy chủ', 'Bản ghi được lưu trên điện thoại trước, rồi gửi dạng JSON tới webhook hoặc API của bạn. Gửi lỗi thì bản ghi chờ và tự thử lại.'],
      ],
    },
    feat: {
      kicker: 'Tính năng',
      title: 'Ứng dụng nhỏ. Quy trình nghiêm túc.',
      sub: 'Mọi thứ một lần quét cần, từ camera đến máy chủ của bạn, và không có gì cản đường khi bạn chỉ muốn quét.',
      form: ['Tạo biểu mẫu theo nhu cầu', '15 loại trường, trường bắt buộc và giá trị ghim. Bắt đầu từ mẫu rồi tuỳ chỉnh. Chia sẻ biểu mẫu cho nhóm bằng tệp; giá trị bí mật không bao giờ được kèm theo.'],
      modes: ['Năm cách quét', ['Mỗi mã một bản ghi', 'Nhiều trường liên tiếp', 'Quét liên tục', 'Danh sách mã', 'Nhiều mã trong một khung hình <span class="text-amber">(beta)</span>']],
      dupes: ['Bắt mã trùng tức thì', 'Cảnh báo, chặn hoặc cộng dồn số lượng khi một mã được quét lại.', 'Đã quét, không thêm', 'Đã thêm'],
      offline: ['Offline trước. Không mất lần quét nào.', 'Mọi bản ghi được lưu trên máy trước. Bản ghi chưa gửi nằm trong hàng đợi và không bao giờ bị tự động xoá. Việc gửi chạy khi ứng dụng đang mở.', ['Đã gửi', 'Đang chờ', 'Lỗi · 422']],
      webhook: ['Gửi tới webhook hoặc API bất kỳ', 'JSON kèm header tuỳ chỉnh, gửi từng bản ghi hoặc theo lô, tự động thử lại với cùng ID bản ghi mỗi lần. Xem phản hồi của máy chủ ngay sau khi quét.'],
      export: ['Xuất CSV & Excel', 'Mang dữ liệu đi bất cứ đâu: CSV, XLSX hoặc ZIP kèm ảnh.'],
      secrets: ['Bí mật luôn được giữ kín', 'URL đích và header bí mật nằm trong Keychain (iOS) hoặc Keystore (Android), không bao giờ có trong tệp xuất, log hay analytics.'],
    },
    screens: { kicker: 'Màn hình', title: 'Xem ứng dụng hoạt động.', prev: 'Màn hình trước', next: 'Màn hình sau' },
    shots: [
      ['hero', 'Quét thẳng vào quy trình của bạn', 'Camera quét nhãn vận chuyển, kèm xác nhận Đã gửi'],
      ['form', 'Biểu mẫu tự điền', 'Biểu mẫu Kiểm kho được điền sau khi quét, gửi tới n8n'],
      ['webhook', 'Gửi tới webhook hoặc API bất kỳ', 'Mẫu yêu cầu JSON mà máy chủ nhận được'],
      ['offline', 'Offline trước. Không mất lần quét nào.', 'Lịch sử với bản ghi đang chờ, lỗi và đã gửi'],
      ['duplicates', 'Bắt mã trùng tức thì', 'Lần quét trùng bị chặn kèm thông báo'],
      ['templates', 'Kiểm kho. Điểm danh. Nhận hàng.', 'Các mẫu biểu mẫu: Quét nhanh, Kiểm kho, Điểm danh, Nhận hàng'],
      ['continuous', 'Quét nhiều mã liên tiếp', 'Biểu mẫu Nhận hàng quét danh sách mã trong một thùng'],
      ['export', 'Xuất CSV & Excel', 'Bảng xuất dữ liệu với lựa chọn CSV và XLSX'],
    ],
    uses: {
      kicker: 'Mẫu có sẵn',
      title: 'Sẵn sàng cho những việc bạn quét mỗi ngày.',
      sub: 'Chọn một mẫu và bắt đầu trong vài giây. Mọi trường đều có thể đổi tên, xoá hoặc thêm mới.',
      items: [
        ['Quét nhanh', 'Một mã, một dấu thời gian. Cách nhanh nhất để có danh sách.'],
        ['Kiểm kho', 'Mã sản phẩm, số lượng và vị trí được ghim giữa các lần quét.'],
        ['Điểm danh', 'Quét vé hoặc thẻ và ghi lại thời điểm từng người đến.'],
        ['Nhận hàng', 'Quét thùng, rồi từng món bên trong, và ghi tình trạng.'],
      ],
    },
    privacy: {
      kicker: 'Quyền riêng tư',
      title: 'Dữ liệu là của bạn.',
      points: [
        ['Không tài khoản, không máy chủ', 'Scan to Flow không có máy chủ riêng. Không cần đăng ký gì cả.'],
        ['Chỉ đi đến nơi bạn gửi', 'Dữ liệu biểu mẫu, giá trị quét và ảnh chỉ đi đến nơi nhận do bạn đặt.'],
        ['Analytics tối thiểu, ẩn danh', 'Sự kiện sử dụng và báo cáo lỗi không bao giờ chứa nội dung bạn quét. Có thể tắt analytics trong Cài đặt.'],
        ['Quảng cáo không cá nhân hoá', 'Bản miễn phí không bao giờ xin theo dõi bạn và không đọc mã định danh quảng cáo.'],
      ],
      link: 'Đọc Chính sách quyền riêng tư',
    },
    pro: {
      kicker: 'Miễn phí & Pro',
      title: 'Bắt đầu miễn phí. Lên Pro khi nó thành việc hằng ngày.',
      free: ['Miễn phí', 'Đủ mọi tính năng, có giới hạn', ['Mọi loại trường, chế độ quét và mẫu', '20 lượt gửi thành công mỗi lượt cài đặt', 'Xuất tối đa 100 bản ghi mới nhất', 'Quảng cáo không cá nhân hoá']],
      pro: ['Pro', 'Cho công việc hằng ngày', ['Không quảng cáo', 'Gửi không giới hạn', 'Xuất không giới hạn', 'Gói theo tháng hoặc theo năm']],
      note: 'Giá hiển thị trong ứng dụng, theo đơn vị tiền tệ của bạn. Bản ghi bị giữ lại do giới hạn vẫn nằm an toàn trong hàng đợi và không bao giờ bị mất.',
    },
    faq: {
      kicker: 'Hỏi đáp',
      title: 'Câu hỏi thường gặp.',
      items: [
        ['Có cần tài khoản không?', 'Không. Mở ứng dụng là quét được ngay. Bước thiết lập duy nhất là chọn ngôn ngữ một lần.'],
        ['Có thể gửi tới máy chủ nào?', 'Bất kỳ endpoint HTTP nào nhận JSON: webhook n8n, Google Apps Script, Make, hoặc API của riêng bạn. Bạn có thể thêm header tuỳ chỉnh, ví dụ token xác thực.'],
        ['Không có mạng có dùng được không?', 'Có. Quét, chỉnh sửa và lịch sử đều chạy offline. Bản ghi chờ trong hàng đợi và được gửi khi có mạng lại và ứng dụng đang mở.'],
        ['Gửi lỗi thì sao?', 'Bản ghi vẫn nằm trên điện thoại, được đánh dấu lỗi hoặc đang chờ, và được thử lại với cùng ID bản ghi để máy chủ có thể bỏ qua bản trùng. Bản ghi chưa gửi không bao giờ bị tự động xoá.'],
        ['Nhà phát triển có xem được dữ liệu quét không?', 'Không. Dữ liệu biểu mẫu, giá trị quét, ảnh, URL và header không bao giờ được gửi cho nhà phát triển. Chỉ có sự kiện sử dụng ẩn danh và báo cáo lỗi, và bạn có thể tắt analytics.'],
        ['Huỷ Pro như thế nào?', 'Pro được quản lý bởi App Store hoặc Google Play. Huỷ bất cứ lúc nào trong phần gói đăng ký của tài khoản cửa hàng, ít nhất 24 giờ trước khi kỳ hạn gia hạn.'],
      ],
    },
    cta: { title: 'Đưa máy. Quét. Xong.', sub: 'Miễn phí trên iOS và Android.' },
  },
};

// Small inline icons (stroke, currentColor).
const icon = {
  arrow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  down: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  lock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5"/></svg>',
  chevL: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
  chevR: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
  menu: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>',
  file: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
};

const kicker = (n, text) =>
  `<p class="font-mono text-xs uppercase tracking-[0.18em] text-teal-bright flex items-center gap-3"><span class="text-mist-3">${n}</span><span class="h-px w-8 bg-teal-bright/50"></span>${text}</p>`;

const storeButtons = (c, { size = 'lg' } = {}) => {
  const pad = size === 'lg' ? 'h-13 px-6 text-[0.95rem]' : 'h-11 px-5 text-sm';
  return `
<div class="flex flex-col sm:flex-row gap-3">
  <a href="${site.appStoreUrl}" rel="noopener" class="group inline-flex items-center justify-center gap-2.5 rounded-full bg-teal-bright ${pad} font-semibold text-ink shadow-[0_10px_30px_-10px_rgb(45_212_191/0.7)] transition hover:bg-teal-soft active:scale-[0.97]">
    ${icon.down}<span>${c.appStore}</span>
  </a>
  <a href="${site.playStoreUrl}" rel="noopener" class="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] ${pad} font-semibold text-mist transition hover:border-teal-bright/60 hover:bg-white/[0.06] active:scale-[0.97]">
    ${icon.down}<span>${c.play}</span>
  </a>
</div>`;
};

const shot = (name, alt, { eager = false, sizes = '(min-width: 1024px) 300px, 70vw', cls = '' } = {}) =>
  `<img src="img/${name}-800.webp" srcset="img/${name}-400.webp 400w, img/${name}-800.webp 800w" sizes="${sizes}" width="800" height="1733" alt="${esc(alt)}" ${
    eager ? 'fetchpriority="high"' : 'loading="lazy"'
  } decoding="async" class="${cls}">`;

export function home(lang) {
  const c = copy[lang];
  const s = t(lang);
  const pfx = lang === 'vi' ? 'vi/' : '';
  const root = lang === 'vi' ? '../' : './';
  const otherHref = lang === 'vi' ? root : `${root}vi/`;
  // Images live at the site root; on /vi/ the path needs "../".
  const fix = (html) => html.replaceAll('src="img/', `src="${root}img/`).replaceAll(/(srcset="|, )img\//g, `$1${root}img/`);

  const header = `
<header class="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-900/75 backdrop-blur-xl supports-[backdrop-filter]:bg-ink-900/60">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
    <a href="${root}${pfx}" class="inline-flex items-center gap-2.5 text-[1.05rem]" aria-label="Scan to Flow, ${s.home}">
      ${mark({ size: 26, frame: '#F3F6F5' })}${wordmark()}
    </a>
    <nav aria-label="Primary" class="hidden md:flex items-center gap-7 text-sm text-mist-2">
      <a class="hover:text-mist transition-colors" href="#how">${c.nav.how}</a>
      <a class="hover:text-mist transition-colors" href="#features">${c.nav.features}</a>
      <a class="hover:text-mist transition-colors" href="#screens">${c.nav.screens}</a>
      <a class="hover:text-mist transition-colors" href="#pro">${c.nav.pro}</a>
      <a class="hover:text-mist transition-colors" href="#faq">${c.nav.faq}</a>
    </nav>
    <div class="flex items-center gap-2">
      <a href="${otherHref}" hreflang="${lang === 'vi' ? 'en' : 'vi'}" lang="${lang === 'vi' ? 'en' : 'vi'}" class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 font-mono text-xs text-mist-2 transition hover:border-teal-bright/60 hover:text-mist" aria-label="${s.otherLang}">${s.otherLangShort}</a>
      <a href="#get" class="hidden sm:inline-flex h-10 items-center rounded-full bg-mist px-4 text-sm font-semibold text-ink transition hover:bg-teal-soft">${c.nav.get}</a>
      <button type="button" data-menu-button aria-expanded="false" aria-controls="mobile-menu" class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist" aria-label="${c.menu}">${icon.menu}</button>
    </div>
  </div>
  <nav id="mobile-menu" aria-label="Mobile" hidden class="md:hidden border-t border-white/[0.06] bg-ink-900">
    <div class="mx-auto flex max-w-6xl flex-col px-4 py-3 text-base">
      ${['how', 'features', 'screens', 'pro', 'faq']
        .map((k) => `<a href="#${k}" class="py-3 text-mist-2 hover:text-mist border-b border-white/[0.05] last:border-0">${c.nav[k]}</a>`)
        .join('')}
      <a href="#get" class="mt-3 mb-1 inline-flex h-12 items-center justify-center rounded-full bg-teal-bright font-semibold text-ink">${c.nav.get}</a>
    </div>
  </nav>
</header>`;

  const hero = `
<section class="relative isolate overflow-hidden">
  <div class="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]" aria-hidden="true"></div>
  <div class="absolute -z-10 right-[-10%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-teal/25 blur-[120px]" aria-hidden="true"></div>
  <div class="motion-hide pointer-events-none absolute inset-x-0 top-0 -z-10 h-px animate-beam bg-teal-bright/70 shadow-[0_0_24px_4px_rgb(45_212_191/0.35)]" aria-hidden="true"></div>

  <div class="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-24 lg:pb-28">
    <div class="flex flex-col gap-7">
      <p class="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-3.5 font-mono text-xs text-mist-2">
        <span class="inline-flex h-5 items-center rounded-full bg-teal-bright/15 px-2 text-[0.65rem] font-semibold uppercase tracking-wider text-teal-bright">iOS · Android</span>${c.eyebrow}
      </p>
      <h1 class="text-[clamp(3.1rem,10vw,6.4rem)] font-extrabold leading-[0.9] tracking-[-0.05em]">
        <span class="block">${c.h1[0]}</span>
        <span class="block text-mist-2/80">${c.h1[1]}</span>
        <span class="block text-teal-bright">${c.h1[2]}<span class="motion-hide ml-1 inline-block h-[0.72em] w-[0.09em] translate-y-[0.06em] animate-blink bg-teal-bright align-baseline" aria-hidden="true"></span></span>
      </h1>
      <p class="max-w-xl text-lg leading-relaxed text-mist-2">${c.lede}</p>
      ${storeButtons(c)}
      <ul class="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-mist-3" aria-label="Highlights">
        ${c.chips.map((x) => `<li class="flex items-center gap-2"><span class="text-teal-bright">${icon.check}</span>${x}</li>`).join('')}
      </ul>
    </div>

    <div class="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
      <div class="relative mx-auto w-[min(72vw,300px)] lg:mr-4 lg:ml-auto">
        <div class="phone" data-phone>
          ${shot('hero', c.heroAlt, { eager: true })}
          <div class="motion-hide pointer-events-none absolute inset-x-[12%] h-[2px] animate-screen-scan rounded-full bg-teal-bright shadow-[0_0_16px_3px_rgb(45_212_191/0.6)]" aria-hidden="true"></div>
        </div>
      </div>

      <figure id="term" data-state="sent" aria-label="${c.termTitle}" class="relative mx-auto -mt-16 w-full max-w-[25rem] rounded-2xl border border-white/10 bg-ink-800/85 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl lg:absolute lg:left-0 lg:-bottom-12 lg:mt-0 lg:w-[21rem]">
        <div class="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 font-mono text-[0.7rem]">
          <span class="flex min-w-0 items-center gap-2"><span class="rounded bg-teal-bright/15 px-1.5 py-0.5 font-semibold text-teal-bright">POST</span><span class="truncate text-mist-2">n8n.example.com/webhook/stock-count</span></span>
        </div>
        <pre class="overflow-x-auto px-4 py-3.5 font-mono text-[0.72rem] leading-[1.6] text-mist-2"><code>{
  <span class="text-mist">"schema"</span>: <span class="text-amber">1</span>,
  <span class="text-mist">"records"</span>: [{
    <span class="text-mist">"record_id"</span>: <span class="text-teal-soft">"<span data-j="id">c2f1a3e0-5d1b</span>…"</span>,
    <span class="text-mist">"data"</span>: {
      <span class="text-mist">"sku"</span>: <span class="text-teal-soft">"<span data-j="sku">2047183005123</span>"</span>,
      <span class="text-mist">"qty"</span>: <span class="text-amber" data-j="qty">12</span>,
      <span class="text-mist">"location"</span>: <span class="text-teal-soft">"<span data-j="loc">Aisle 4 · Bay 12</span>"</span>
    }
  }]
}</code></pre>
        <figcaption class="flex items-center justify-between border-t border-white/[0.07] px-4 py-3 font-mono text-[0.7rem]" aria-live="polite">
          <span class="flex items-center gap-2"><span class="status-dot h-2 w-2 rounded-full bg-teal-bright transition-all"></span><span class="status-sending text-amber">${c.sending}</span><span class="status-sent text-teal-bright">${c.sent}</span></span>
          <span class="text-mist-3"><span data-j="count">1</span> / ∞</span>
        </figcaption>
      </figure>
    </div>
  </div>

  <div class="border-y border-white/[0.07] bg-ink-950/60">
    <div class="mx-auto flex max-w-6xl items-center gap-6 px-4 sm:px-6">
      <span class="shrink-0 py-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mist-3">${c.tickerLabel}</span>
      <div class="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul class="flex w-max animate-marquee gap-8 py-4 font-mono text-sm text-mist-2 hover:[animation-play-state:paused]">
          ${[...c.fields, ...c.fields]
            .map((f, i) => `<li class="flex items-center gap-8"${i >= c.fields.length ? ' aria-hidden="true"' : ''}>${f}<span class="barcode h-3 w-6 text-white/20" aria-hidden="true"></span></li>`)
            .join('')}
        </ul>
      </div>
    </div>
  </div>
</section>`;

  const how = `
<section id="how" class="relative py-24 sm:py-32">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="max-w-3xl" data-reveal>
      ${kicker('01', c.how.kicker)}
      <h2 class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.035em]">${c.how.title}</h2>
    </div>
    <div class="relative mt-16">
      <div class="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-white/10 md:block" aria-hidden="true">
        <span class="motion-hide absolute top-1/2 -ml-1.5 h-3 w-3 -translate-y-1/2 animate-packet rounded-sm bg-teal-bright shadow-[0_0_14px_2px_rgb(45_212_191/0.6)]"></span>
      </div>
      <ol class="grid gap-10 md:grid-cols-3 md:gap-8">
        ${c.how.steps
          .map(
            ([title, text], i) => `
        <li class="relative flex flex-col gap-4" data-reveal style="--d:${i * 120}ms">
          <span class="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal-bright/40 bg-ink-900 font-mono text-sm font-semibold text-teal-bright">0${i + 1}</span>
          <h3 class="text-xl font-semibold tracking-[-0.02em]">${title}</h3>
          <p class="text-mist-2 leading-relaxed">${text}</p>
        </li>`
          )
          .join('')}
      </ol>
    </div>
  </div>
</section>`;

  const card = 'rounded-3xl border border-white/[0.08] bg-ink-800/60 p-6 sm:p-8 flex flex-col gap-5 overflow-hidden';
  const f = c.feat;
  const features = `
<section id="features" class="relative border-t border-white/[0.06] bg-ink-950/40 py-24 sm:py-32">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between" data-reveal>
      <div class="max-w-2xl">
        ${kicker('02', f.kicker)}
        <h2 class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.035em]">${f.title}</h2>
      </div>
      <p class="max-w-sm text-mist-2 leading-relaxed">${f.sub}</p>
    </div>

    <div class="mt-14 grid gap-4 md:grid-cols-6">
      <article class="${card} md:col-span-4" data-reveal>
        <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.form[0]}</h3>
        <p class="max-w-xl text-mist-2 leading-relaxed">${f.form[1]}</p>
        <ul class="mt-auto flex flex-wrap gap-2" aria-label="${c.tickerLabel}">
          ${c.fields.map((x, i) => `<li class="rounded-full border px-3 py-1.5 font-mono text-xs ${i < 3 ? 'border-teal-bright/40 bg-teal-bright/10 text-teal-soft' : 'border-white/10 text-mist-2'}">${x}</li>`).join('')}
        </ul>
      </article>

      <article class="${card} md:col-span-2" data-reveal style="--d:80ms">
        <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.modes[0]}</h3>
        <ol class="flex flex-col divide-y divide-white/[0.06] font-mono text-sm">
          ${f.modes[1].map((m, i) => `<li class="flex items-center gap-3 py-2.5"><span class="text-teal-bright">${String(i + 1).padStart(2, '0')}</span><span class="text-mist-2">${m}</span></li>`).join('')}
        </ol>
      </article>

      <article class="${card} md:col-span-2" data-reveal>
        <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.dupes[0]}</h3>
        <p class="text-mist-2 leading-relaxed">${f.dupes[1]}</p>
        <div class="mt-auto flex flex-col gap-2 font-mono text-xs">
          <div class="flex items-center justify-between rounded-xl bg-ink-700/70 px-3.5 py-3"><span class="text-mist">2047183005123</span><span class="flex items-center gap-1.5 text-teal-bright">${icon.check}${f.dupes[3]}</span></div>
          <div class="flex items-center justify-between gap-3 rounded-xl border border-amber/30 bg-amber/10 px-3.5 py-3"><span class="text-mist">2047183005123</span><span class="text-right text-amber">${f.dupes[2]}</span></div>
        </div>
      </article>

      <article class="${card} md:col-span-2" data-reveal style="--d:80ms">
        <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.offline[0]}</h3>
        <p class="text-mist-2 leading-relaxed">${f.offline[1]}</p>
        <ul class="mt-auto flex flex-wrap gap-2 font-mono text-xs">
          <li class="rounded-full bg-teal-bright/15 px-3 py-1.5 text-teal-bright">● ${f.offline[2][0]}</li>
          <li class="rounded-full bg-white/[0.06] px-3 py-1.5 text-mist-2">◌ ${f.offline[2][1]}</li>
          <li class="rounded-full bg-coral/10 px-3 py-1.5 text-coral">▲ ${f.offline[2][2]}</li>
        </ul>
      </article>

      <article class="${card} md:col-span-2" data-reveal style="--d:160ms">
        <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.webhook[0]}</h3>
        <p class="text-mist-2 leading-relaxed">${f.webhook[1]}</p>
        <pre class="mt-auto overflow-x-auto rounded-xl bg-ink-950/80 px-4 py-3 font-mono text-[0.72rem] leading-relaxed text-mist-2"><code><span class="text-teal-bright">POST</span> /webhook/stock-count
Content-Type: application/json
Authorization: Bearer ••••••••
Idempotency-Key: c2f1a3e0-…</code></pre>
      </article>

      <article class="${card} md:col-span-3" data-reveal>
        <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.export[0]}</h3>
        <p class="text-mist-2 leading-relaxed">${f.export[1]}</p>
        <ul class="mt-auto flex flex-wrap gap-2 font-mono text-sm">
          ${['records.csv', 'records.xlsx', 'records+photos.zip']
            .map((n) => `<li class="flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-3 text-mist-2"><span class="text-teal-bright">${icon.file}</span>${n}</li>`)
            .join('')}
        </ul>
      </article>

      <article class="${card} md:col-span-3" data-reveal style="--d:80ms">
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-2xl font-semibold tracking-[-0.025em]">${f.secrets[0]}</h3>
          <span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-bright/10 text-teal-bright">${icon.lock}</span>
        </div>
        <p class="text-mist-2 leading-relaxed">${f.secrets[1]}</p>
        <div class="mt-auto flex items-center gap-3 font-mono text-xs text-mist-3">
          <span class="rounded-md bg-white/[0.05] px-2 py-1">Keychain</span><span class="rounded-md bg-white/[0.05] px-2 py-1">Keystore</span><span class="rounded-md bg-white/[0.05] px-2 py-1">HTTPS</span>
        </div>
      </article>
    </div>
  </div>
</section>`;

  const screens = `
<section id="screens" class="relative overflow-hidden py-24 sm:py-32">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="flex items-end justify-between gap-6" data-reveal>
      <div>
        ${kicker('03', c.screens.kicker)}
        <h2 class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.035em]">${c.screens.title}</h2>
      </div>
      <div class="hidden gap-2 sm:flex">
        <button type="button" data-scroll="-1" aria-controls="gallery" aria-label="${c.screens.prev}" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist transition hover:border-teal-bright/60 hover:text-teal-bright">${icon.chevL}</button>
        <button type="button" data-scroll="1" aria-controls="gallery" aria-label="${c.screens.next}" class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-mist transition hover:border-teal-bright/60 hover:text-teal-bright">${icon.chevR}</button>
      </div>
    </div>
  </div>
  <ul id="gallery" tabindex="0" aria-label="${c.screens.title}" class="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-[max(1.5rem,calc((100vw_-_72rem)/2_+_1.5rem))] lg:scroll-px-[max(1.5rem,calc((100vw_-_72rem)/2_+_1.5rem))] scroll-px-4 sm:scroll-px-6">
    ${c.shots
      .map(
        ([name, caption, alt], i) => `
    <li class="w-[min(64vw,250px)] shrink-0 snap-start">
      <figure class="flex flex-col gap-4">
        <div class="phone phone-sm">${shot(name, alt, { sizes: '250px' })}</div>
        <figcaption class="flex gap-3 text-sm"><span class="font-mono text-teal-bright">${String(i + 1).padStart(2, '0')}</span><span class="font-medium text-mist">${caption}</span></figcaption>
      </figure>
    </li>`
      )
      .join('')}
  </ul>
</section>`;

  const fieldsOf = [
    ['code', 'scanned_at'],
    ['sku', 'qty', 'location'],
    ['ticket', 'checked_at'],
    ['box', 'items[ ]', 'condition'],
  ];
  const uses = `
<section id="use-cases" class="border-t border-white/[0.06] bg-ink-950/40 py-24 sm:py-32">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="max-w-2xl" data-reveal>
      ${kicker('04', c.uses.kicker)}
      <h2 class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.035em]">${c.uses.title}</h2>
      <p class="mt-5 text-mist-2 leading-relaxed">${c.uses.sub}</p>
    </div>
    <ul class="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
      ${c.uses.items
        .map(
          ([title, text], i) => `
      <li class="flex flex-col gap-4 bg-ink-900 p-7" data-reveal style="--d:${i * 80}ms">
        <div class="barcode h-6 w-20 text-teal-bright/70" aria-hidden="true"></div>
        <h3 class="text-xl font-semibold tracking-[-0.02em]">${title}</h3>
        <p class="text-sm leading-relaxed text-mist-2">${text}</p>
        <p class="mt-auto font-mono text-xs text-mist-3">{ ${fieldsOf[i].map((k) => `<span class="text-teal-soft">${k}</span>`).join(', ')} }</p>
      </li>`
        )
        .join('')}
    </ul>
  </div>
</section>`;

  const privacy = `
<section id="privacy" class="py-24 sm:py-32">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="relative overflow-hidden rounded-[2rem] border border-teal-bright/20 bg-teal-night/60 p-8 sm:p-12 lg:p-16">
      <div class="grid-bg absolute inset-0 opacity-60" aria-hidden="true"></div>
      <div class="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="flex flex-col gap-6" data-reveal>
          ${kicker('05', c.privacy.kicker)}
          <h2 class="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1] tracking-[-0.04em]">${c.privacy.title}</h2>
          <div class="text-teal-bright">${mark({ size: 120, frame: '#F3F6F5', stroke: 6 })}</div>
          <a href="${root}${pfx}privacy/" class="inline-flex w-fit items-center gap-2 font-semibold text-teal-bright underline-offset-4 hover:underline">${c.privacy.link}${icon.arrow}</a>
        </div>
        <dl class="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          ${c.privacy.points
            .map(
              ([title, text], i) => `
          <div class="flex flex-col gap-2 border-t border-white/15 pt-5" data-reveal style="--d:${i * 80}ms">
            <dt class="font-semibold text-mist">${title}</dt>
            <dd class="text-sm leading-relaxed text-mist-2">${text}</dd>
          </div>`
            )
            .join('')}
        </dl>
      </div>
    </div>
  </div>
</section>`;

  const plan = ([name, sub, items], featured) => `
<article class="relative flex flex-col gap-6 rounded-3xl p-8 sm:p-10 ${
    featured ? 'border border-teal-bright/50 bg-gradient-to-b from-teal/25 to-ink-800/80 shadow-[0_30px_80px_-30px_rgb(45_212_191/0.45)]' : 'border border-white/[0.08] bg-ink-800/50'
  }" data-reveal${featured ? ' style="--d:100ms"' : ''}>
  <div class="flex items-center justify-between">
    <h3 class="text-3xl font-bold tracking-[-0.03em]">${name}</h3>
    ${featured ? `<span class="barcode h-6 w-16 text-teal-bright" aria-hidden="true"></span>` : ''}
  </div>
  <p class="font-mono text-xs uppercase tracking-[0.16em] ${featured ? 'text-teal-bright' : 'text-mist-3'}">${sub}</p>
  <ul class="flex flex-col gap-3.5">
    ${items.map((x) => `<li class="flex items-start gap-3"><span class="mt-0.5 ${featured ? 'text-teal-bright' : 'text-mist-3'}">${icon.check}</span><span class="${featured ? 'text-mist' : 'text-mist-2'}">${x}</span></li>`).join('')}
  </ul>
</article>`;

  const pro = `
<section id="pro" class="border-t border-white/[0.06] py-24 sm:py-32">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="mx-auto max-w-2xl text-center" data-reveal>
      <div class="flex justify-center">${kicker('06', c.pro.kicker)}</div>
      <h2 class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.035em]">${c.pro.title}</h2>
    </div>
    <div class="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
      ${plan(c.pro.free, false)}
      ${plan(c.pro.pro, true)}
    </div>
    <p class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-mist-3">${c.pro.note}</p>
  </div>
</section>`;

  const faq = `
<section id="faq" class="border-t border-white/[0.06] bg-ink-950/40 py-24 sm:py-32">
  <div class="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
    <div data-reveal>
      ${kicker('07', c.faq.kicker)}
      <h2 class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.035em]">${c.faq.title}</h2>
      <p class="mt-5 text-mist-2">${lang === 'vi' ? 'Còn thắc mắc?' : 'Something else?'} <a class="text-teal-bright underline-offset-4 hover:underline" href="mailto:${site.email}">${site.email}</a></p>
    </div>
    <div class="flex flex-col">
      ${c.faq.items
        .map(
          ([q, a], i) => `
      <details class="faq group border-b border-white/10"${i === 0 ? ' open' : ''}>
        <summary class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium tracking-[-0.01em] text-mist hover:text-teal-soft">
          ${q}<span class="plus shrink-0 text-teal-bright">${icon.plus}</span>
        </summary>
        <p class="pb-6 pr-10 leading-relaxed text-mist-2">${a}</p>
      </details>`
        )
        .join('')}
    </div>
  </div>
</section>`;

  const cta = `
<section id="get" class="relative isolate overflow-hidden py-24 sm:py-32">
  <div class="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" aria-hidden="true"></div>
  <div class="mx-auto flex max-w-3xl flex-col items-center gap-8 px-4 text-center sm:px-6" data-reveal>
    <div class="viewfinder flex h-36 w-36 items-center justify-center rounded-2xl p-6 [--l:30px] [--w:4px]" aria-hidden="true">
      <img src="${root}apple-touch-icon.png" width="96" height="96" alt="" class="h-24 w-24 rounded-[1.4rem]" loading="lazy">
    </div>
    <h2 class="text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">${c.cta.title}</h2>
    <p class="text-lg text-mist-2">${c.cta.sub}</p>
    ${storeButtons(c)}
  </div>
</section>`;

  const body = `
${header}
<main id="main">
${hero}
${how}
${features}
${screens}
${uses}
${privacy}
${pro}
${faq}
${cta}
</main>
${footer({ lang, root, alternates: { en: '', vi: 'vi/' } })}`;

  return {
    lang,
    path: pfx,
    alternates: { en: '', vi: 'vi/' },
    title: c.title,
    description: c.description,
    theme: 'dark',
    body: fix(body),
    scripts: `<script src="${root}assets/main.js" defer></script>`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      name: 'Scan to Flow',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'BusinessApplication',
      description: c.description,
      inLanguage: lang,
      author: { '@type': 'Person', name: site.developer },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      sameAs: [site.appStoreUrl, site.playStoreUrl],
    },
  };
}
