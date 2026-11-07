// Privacy Policy. Must match the App Store privacy labels and Play Data safety form
// (scantoflow docs/product/store-listing.md, "Privacy declarations"; SEC-13, SEC-14).
import { site } from '../../site.config.mjs';

const L = {
  firebase: 'https://firebase.google.com/support/privacy',
  google: 'https://policies.google.com/privacy',
  partners: 'https://policies.google.com/technologies/partner-sites',
  revenuecat: 'https://www.revenuecat.com/privacy',
  apple: 'https://www.apple.com/legal/privacy/',
  github: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
};
const a = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;
const mail = `<a href="mailto:${site.email}">${site.email}</a>`;

export const privacy = {
  en: {
    title: 'Privacy Policy',
    description: 'How the Scan to Flow app handles your data: no account, no backend, form data goes only where you send it.',
    summaryTitle: 'The short version',
    summary: [
      'There is no account and no Scan to Flow server. Your forms, records, scanned values and photos stay on your device.',
      'Records are sent only to the webhook or API destinations you set up. We never receive them.',
      'We receive anonymous usage events and crash reports through Google Firebase. They never contain what you scan, and you can turn analytics off.',
      'The free version shows non-personalized ads from Google AdMob. The app does not ask to track you and does not use the advertising ID.',
      'Pro purchases are handled by Apple or Google and checked through RevenueCat with an anonymous ID.',
    ],
    sections: [
      {
        id: 'who',
        title: '1. Who we are',
        html: `<p>Scan to Flow (“the app”) is published by ${site.developer}, an independent developer based in ${site.country.en} (“we”, “us”). We are responsible for the information described in this policy. Contact: ${mail}.</p>
<p>This policy covers the Scan to Flow apps for iOS and Android and this website.</p>`,
      },
      {
        id: 'on-device',
        title: '2. Data that stays on your device',
        html: `<p>The app works without an account and without a backend of our own. The following is stored only on your device and is never sent to us:</p>
<ul>
<li>Your forms, records and scanned values, and the history and queue of records.</li>
<li>Photos you take in a form. The app removes their metadata (such as location) before storing them.</li>
<li>Files you export (CSV, XLSX or ZIP). Where they go is your choice.</li>
<li>Destination URLs and secret header values, which are kept in the iOS Keychain or Android Keystore.</li>
</ul>
<p>The app’s database and photos are excluded from iCloud and Android backups. On iOS, a form’s destination settings saved in the Keychain may remain after you delete the app, so they can be restored if you reinstall it. They are removed when you delete the form or choose “Start fresh”. Records and photos are not restored.</p>`,
      },
      {
        id: 'destinations',
        title: '3. Data you send to your destinations',
        html: `<p>When you connect a destination, the app sends your records, as JSON and with any headers you set, to the URL you entered. That may be your own server, a service like n8n, or any other API. We do not receive, see or store this data. The destination’s owner decides how it is processed, so check their privacy policy.</p>
<p>Connections use HTTPS by default. You can choose plain HTTP for a server on your own network; the app shows a warning, because the data is then not encrypted in transit.</p>
<p>When you share a form as a file, secret values are never included, and the destination URL is included only if you choose to include it.</p>
<p>If you use the app to collect information about other people, for example at a check-in, you are responsible for that information and for having a legal basis to collect it.</p>`,
      },
      {
        id: 'collected',
        title: '4. Data we collect',
        html: `<h3>Usage analytics (Google Firebase Analytics)</h3>
<p>The app sends a fixed list of events that tell us how the app is used, such as “form created”, “record saved”, “delivery succeeded” or “data exported”, with a few general parameters (for example the scan mode, the export format or an error category such as “timeout”). Firebase also records standard information such as the app version, device model, operating system, language, a random app instance ID, and an approximate country or region derived from your connection.</p>
<p><strong>Never included:</strong> scanned values, field names or labels, form names, URLs, domains, headers, payloads, server responses or operator names.</p>
<p>Analytics is on by default. You can turn it off at any time in Settings › App › Share usage analytics, which also stops Firebase Analytics collection.</p>

<h3>Crash reports (Google Firebase Crashlytics)</h3>
<p>If the app crashes, it sends a crash report with technical diagnostics: the error and stack trace, device model, operating system, app version, and a random installation ID. Error messages that could contain your data are reduced to a general category before they are reported.</p>

<h3>Advertising (Google AdMob, free version only)</h3>
<p>The free version shows ads served by Google AdMob. Every ad request is for <strong>non-personalized</strong> ads. The app does not ask for permission to track you (App Tracking Transparency), does not read the advertising ID (IDFA or Android advertising ID), and the Android advertising ID permission is removed. To serve, limit, measure and protect ads against fraud, Google may process information such as your device and app information, a random device-level identifier, ad interactions and an approximate location derived from your IP address. Where the law requires it, for example in the European Economic Area, the UK and Switzerland, Google’s consent form is shown before the first ad. Pro removes all ads.</p>

<h3>Purchases (Apple, Google and RevenueCat)</h3>
<p>Pro subscriptions are bought through the App Store or Google Play. Apple or Google processes the payment; we never see your payment details. To check whether Pro is active, the app uses RevenueCat, which receives your purchase history for this app and an anonymous app user ID generated on your device. It is not linked to your name or email.</p>

<h3>Support</h3>
<p>If you email us, we receive your email address and whatever you write, and use it only to reply to you.</p>

<h3>Summary of data we receive</h3>
<div class="overflow-x-auto"><table>
<thead><tr><th>Data</th><th>Purpose</th><th>Linked to you</th><th>Used to track you</th></tr></thead>
<tbody>
<tr><td>App interactions (allowlisted events), approximate country or region</td><td>Analytics</td><td>No</td><td>No</td></tr>
<tr><td>Crash logs and diagnostics</td><td>App functionality</td><td>No</td><td>No</td></tr>
<tr><td>Firebase app instance and installation IDs</td><td>Analytics, app functionality</td><td>No</td><td>No</td></tr>
<tr><td>Ad data, device ID and approximate location (AdMob, free version)</td><td>Third-party advertising</td><td>No</td><td>No</td></tr>
<tr><td>Purchase history and anonymous app user ID (RevenueCat)</td><td>App functionality</td><td>No</td><td>No</td></tr>
</tbody></table></div>`,
      },
      {
        id: 'permissions',
        title: '5. Device permissions',
        html: `<ul>
<li><strong>Camera:</strong> to scan codes and take photos. Asked the first time you scan.</li>
<li><strong>Local network (iOS):</strong> to send records to a server on your own network.</li>
<li><strong>Internet (Android):</strong> to send records to your destinations and to reach Firebase.</li>
</ul>
<p>The app does not ask for access to your contacts or photo library. You can change permissions at any time in your device settings.</p>`,
      },
      {
        id: 'use',
        title: '6. How we use data, and our legal bases',
        html: `<p>We use the data we receive to understand which features matter, to find and fix crashes, to show ads in the free version, and to provide Pro. We do not sell personal data, we do not track you across other companies’ apps or websites, and we do not build advertising profiles.</p>
<p>Where the GDPR or similar laws apply, our legal bases are: our legitimate interest in keeping the app reliable and improving it (analytics and crash reports, which you can turn off); performance of a contract (Pro purchases); and your consent where the law requires it (ads).</p>`,
      },
      {
        id: 'processors',
        title: '7. Service providers',
        html: `<p>We rely on these providers, each under its own privacy terms:</p>
<ul>
<li>Google Firebase (Analytics, Crashlytics): ${a(L.firebase, 'Privacy and Security in Firebase')}</li>
<li>Google AdMob: ${a(L.google, 'Google Privacy Policy')} and ${a(L.partners, 'how Google uses information from apps that use its services')}</li>
<li>RevenueCat: ${a(L.revenuecat, 'RevenueCat Privacy Policy')}</li>
<li>Apple App Store: ${a(L.apple, 'Apple Privacy Policy')}</li>
<li>Google Play: ${a(L.google, 'Google Privacy Policy')}</li>
</ul>
<p>These providers may process data in the United States and other countries. They use safeguards such as standard contractual clauses for international transfers.</p>`,
      },
      {
        id: 'retention',
        title: '8. Retention and deletion',
        html: `<p>Data on your device stays until you or the app delete it. To keep storage small, the app removes records that were <strong>sent successfully</strong> once they are older than 30 days or beyond the newest 5,000 per form. Records that have not been sent are never deleted automatically. You can delete records, forms and photos in the app at any time, or delete the app to remove all of them (see section 2 for destination settings on iOS).</p>
<p>Analytics and crash data are kept by Google for the periods set in our Firebase project and Google’s own policies, and are then deleted. Because the data we receive is not linked to your identity, we usually cannot find a specific person’s data. If you want us to try, email us and we will help as far as we can.</p>`,
      },
      {
        id: 'rights',
        title: '9. Your choices and rights',
        html: `<ul>
<li>Turn analytics off in Settings › App › Share usage analytics.</li>
<li>Change your ad consent choice where Google’s consent form applies, or upgrade to Pro to remove ads.</li>
<li>Delete records, forms or the app at any time.</li>
</ul>
<p>Depending on where you live, including Vietnam, the EU, the UK and California, you may have the right to access, correct, delete or restrict the processing of your personal data, to object to it, to data portability, and to complain to a data protection authority. Contact us at ${mail} to exercise these rights.</p>`,
      },
      {
        id: 'children',
        title: '10. Children',
        html: `<p>The app is a business and productivity tool and is not directed at children under 13 (or under 16 where local law sets a higher age). We do not knowingly collect personal data from children.</p>`,
      },
      {
        id: 'security',
        title: '11. Security',
        html: `<p>Secrets are kept in the Keychain or Keystore and never appear in records, exports, logs, crash reports or analytics. Still, someone who controls your unlocked device may be able to extract stored credentials. Use narrowly scoped tokens for your destinations.</p>`,
      },
      {
        id: 'website',
        title: '12. This website',
        html: `<p>This website is a static site hosted on GitHub Pages. It uses no cookies, no analytics and no trackers, and its fonts are served from the same site. GitHub may log technical information, such as your IP address, to operate and secure the service: see the ${a(L.github, 'GitHub General Privacy Statement')}.</p>`,
      },
      {
        id: 'changes',
        title: '13. Changes to this policy',
        html: `<p>If we change what data the app collects, we will update this policy and the app store privacy labels in the same release, and change the “Last updated” date above. For significant changes we will give notice in the app or on this page.</p>`,
      },
      {
        id: 'contact',
        title: '14. Contact',
        html: `<p>${site.developer}, ${site.country.en}<br>Email: ${mail}</p>`,
      },
    ],
  },

  vi: {
    title: 'Chính sách quyền riêng tư',
    description: 'Cách ứng dụng Scan to Flow xử lý dữ liệu: không tài khoản, không máy chủ trung gian, dữ liệu biểu mẫu chỉ đến nơi bạn gửi.',
    summaryTitle: 'Tóm tắt',
    summary: [
      'Không có tài khoản và không có máy chủ Scan to Flow. Biểu mẫu, bản ghi, giá trị quét và ảnh của bạn nằm trên thiết bị.',
      'Bản ghi chỉ được gửi tới webhook hoặc API do bạn thiết lập. Chúng tôi không bao giờ nhận được chúng.',
      'Chúng tôi nhận sự kiện sử dụng ẩn danh và báo cáo lỗi qua Google Firebase. Chúng không bao giờ chứa nội dung bạn quét, và bạn có thể tắt analytics.',
      'Bản miễn phí hiển thị quảng cáo không cá nhân hoá từ Google AdMob. Ứng dụng không xin theo dõi bạn và không dùng mã định danh quảng cáo.',
      'Giao dịch Pro do Apple hoặc Google xử lý và được kiểm tra qua RevenueCat bằng một ID ẩn danh.',
    ],
    sections: [
      {
        id: 'who',
        title: '1. Chúng tôi là ai',
        html: `<p>Scan to Flow (“ứng dụng”) được phát hành bởi ${site.developer}, nhà phát triển độc lập tại ${site.country.vi} (“chúng tôi”). Chúng tôi chịu trách nhiệm về thông tin được mô tả trong chính sách này. Liên hệ: ${mail}.</p>
<p>Chính sách này áp dụng cho ứng dụng Scan to Flow trên iOS, Android và trang web này.</p>`,
      },
      {
        id: 'on-device',
        title: '2. Dữ liệu nằm trên thiết bị của bạn',
        html: `<p>Ứng dụng hoạt động không cần tài khoản và không có máy chủ riêng. Những dữ liệu sau chỉ được lưu trên thiết bị của bạn và không bao giờ được gửi cho chúng tôi:</p>
<ul>
<li>Biểu mẫu, bản ghi, giá trị quét, lịch sử và hàng đợi bản ghi.</li>
<li>Ảnh chụp trong biểu mẫu. Ứng dụng xoá siêu dữ liệu (như vị trí) trước khi lưu.</li>
<li>Tệp bạn xuất (CSV, XLSX hoặc ZIP). Tệp đi đâu là do bạn chọn.</li>
<li>URL đích và giá trị header bí mật, được giữ trong Keychain (iOS) hoặc Keystore (Android).</li>
</ul>
<p>Cơ sở dữ liệu và ảnh của ứng dụng không được sao lưu lên iCloud hay Android Backup. Trên iOS, cài đặt nơi nhận của biểu mẫu lưu trong Keychain có thể còn lại sau khi bạn xoá ứng dụng, để khôi phục khi cài lại. Chúng bị xoá khi bạn xoá biểu mẫu hoặc chọn “Bắt đầu mới”. Bản ghi và ảnh không được khôi phục.</p>`,
      },
      {
        id: 'destinations',
        title: '3. Dữ liệu bạn gửi tới nơi nhận',
        html: `<p>Khi bạn kết nối nơi nhận, ứng dụng gửi bản ghi dạng JSON, kèm các header bạn đặt, tới URL bạn nhập. Đó có thể là máy chủ của bạn, một dịch vụ như n8n, hoặc API bất kỳ. Chúng tôi không nhận, không xem và không lưu dữ liệu này. Chủ sở hữu nơi nhận quyết định cách xử lý, vì vậy hãy xem chính sách quyền riêng tư của họ.</p>
<p>Kết nối mặc định dùng HTTPS. Bạn có thể chọn HTTP cho máy chủ trong mạng nội bộ; ứng dụng sẽ hiện cảnh báo vì dữ liệu khi đó không được mã hoá trên đường truyền.</p>
<p>Khi chia sẻ biểu mẫu bằng tệp, giá trị bí mật không bao giờ được kèm theo, và URL đích chỉ được kèm nếu bạn chọn.</p>
<p>Nếu bạn dùng ứng dụng để thu thập thông tin về người khác, ví dụ khi điểm danh, bạn chịu trách nhiệm về thông tin đó và phải có cơ sở pháp lý để thu thập.</p>`,
      },
      {
        id: 'collected',
        title: '4. Dữ liệu chúng tôi thu thập',
        html: `<h3>Phân tích sử dụng (Google Firebase Analytics)</h3>
<p>Ứng dụng gửi một danh sách sự kiện cố định cho biết ứng dụng được dùng như thế nào, như “tạo biểu mẫu”, “lưu bản ghi”, “gửi thành công” hoặc “xuất dữ liệu”, kèm vài tham số chung (ví dụ chế độ quét, định dạng xuất hoặc loại lỗi như “hết thời gian”). Firebase cũng ghi các thông tin tiêu chuẩn như phiên bản ứng dụng, mẫu thiết bị, hệ điều hành, ngôn ngữ, một ID ngẫu nhiên của phiên cài đặt, và quốc gia hoặc khu vực gần đúng suy ra từ kết nối.</p>
<p><strong>Không bao giờ bao gồm:</strong> giá trị quét, tên hoặc nhãn trường, tên biểu mẫu, URL, tên miền, header, nội dung gửi, phản hồi của máy chủ hay tên người vận hành.</p>
<p>Analytics được bật mặc định. Bạn có thể tắt bất cứ lúc nào trong Cài đặt › Ứng dụng › Chia sẻ thống kê sử dụng, việc này cũng dừng thu thập của Firebase Analytics.</p>

<h3>Báo cáo lỗi (Google Firebase Crashlytics)</h3>
<p>Khi ứng dụng gặp sự cố, ứng dụng gửi báo cáo kỹ thuật: lỗi và stack trace, mẫu thiết bị, hệ điều hành, phiên bản ứng dụng và một ID cài đặt ngẫu nhiên. Thông báo lỗi có thể chứa dữ liệu của bạn được rút gọn thành loại lỗi chung trước khi báo cáo.</p>

<h3>Quảng cáo (Google AdMob, chỉ bản miễn phí)</h3>
<p>Bản miễn phí hiển thị quảng cáo do Google AdMob cung cấp. Mọi yêu cầu quảng cáo đều là quảng cáo <strong>không cá nhân hoá</strong>. Ứng dụng không xin quyền theo dõi (App Tracking Transparency), không đọc mã định danh quảng cáo (IDFA hoặc Android advertising ID), và quyền advertising ID trên Android đã được gỡ bỏ. Để phân phối, giới hạn tần suất, đo lường và chống gian lận quảng cáo, Google có thể xử lý thông tin như thông tin thiết bị và ứng dụng, một mã định danh ngẫu nhiên cấp thiết bị, tương tác với quảng cáo và vị trí gần đúng suy ra từ địa chỉ IP. Ở nơi luật yêu cầu, ví dụ Khu vực Kinh tế Châu Âu, Vương quốc Anh và Thuỵ Sĩ, biểu mẫu đồng ý của Google được hiển thị trước quảng cáo đầu tiên. Pro gỡ bỏ mọi quảng cáo.</p>

<h3>Giao dịch mua (Apple, Google và RevenueCat)</h3>
<p>Gói Pro được mua qua App Store hoặc Google Play. Apple hoặc Google xử lý thanh toán; chúng tôi không bao giờ thấy thông tin thanh toán của bạn. Để kiểm tra Pro có đang hoạt động, ứng dụng dùng RevenueCat, dịch vụ này nhận lịch sử mua của ứng dụng và một ID người dùng ẩn danh tạo trên thiết bị. ID này không gắn với tên hay email của bạn.</p>

<h3>Hỗ trợ</h3>
<p>Nếu bạn gửi email cho chúng tôi, chúng tôi nhận địa chỉ email và nội dung bạn viết, và chỉ dùng để trả lời bạn.</p>

<h3>Tóm tắt dữ liệu chúng tôi nhận</h3>
<div class="overflow-x-auto"><table>
<thead><tr><th>Dữ liệu</th><th>Mục đích</th><th>Gắn với bạn</th><th>Dùng để theo dõi</th></tr></thead>
<tbody>
<tr><td>Tương tác ứng dụng (sự kiện trong danh sách cho phép), quốc gia hoặc khu vực gần đúng</td><td>Phân tích</td><td>Không</td><td>Không</td></tr>
<tr><td>Nhật ký lỗi và chẩn đoán</td><td>Chức năng ứng dụng</td><td>Không</td><td>Không</td></tr>
<tr><td>ID phiên cài đặt Firebase</td><td>Phân tích, chức năng ứng dụng</td><td>Không</td><td>Không</td></tr>
<tr><td>Dữ liệu quảng cáo, ID thiết bị và vị trí gần đúng (AdMob, bản miễn phí)</td><td>Quảng cáo của bên thứ ba</td><td>Không</td><td>Không</td></tr>
<tr><td>Lịch sử mua và ID người dùng ẩn danh (RevenueCat)</td><td>Chức năng ứng dụng</td><td>Không</td><td>Không</td></tr>
</tbody></table></div>`,
      },
      {
        id: 'permissions',
        title: '5. Quyền truy cập thiết bị',
        html: `<ul>
<li><strong>Camera:</strong> để quét mã và chụp ảnh. Được hỏi khi bạn quét lần đầu.</li>
<li><strong>Mạng cục bộ (iOS):</strong> để gửi bản ghi tới máy chủ trong mạng của bạn.</li>
<li><strong>Internet (Android):</strong> để gửi bản ghi tới nơi nhận và kết nối Firebase.</li>
</ul>
<p>Ứng dụng không xin quyền truy cập danh bạ hay thư viện ảnh. Bạn có thể thay đổi quyền bất cứ lúc nào trong cài đặt thiết bị.</p>`,
      },
      {
        id: 'use',
        title: '6. Cách chúng tôi sử dụng dữ liệu và cơ sở pháp lý',
        html: `<p>Chúng tôi dùng dữ liệu nhận được để hiểu tính năng nào quan trọng, tìm và sửa lỗi, hiển thị quảng cáo ở bản miễn phí và cung cấp Pro. Chúng tôi không bán dữ liệu cá nhân, không theo dõi bạn trên ứng dụng hay trang web của công ty khác, và không xây dựng hồ sơ quảng cáo.</p>
<p>Ở nơi áp dụng GDPR hoặc luật tương tự, cơ sở pháp lý của chúng tôi là: lợi ích hợp pháp trong việc giữ ứng dụng ổn định và cải thiện nó (analytics và báo cáo lỗi, bạn có thể tắt); thực hiện hợp đồng (mua Pro); và sự đồng ý của bạn khi luật yêu cầu (quảng cáo).</p>`,
      },
      {
        id: 'processors',
        title: '7. Nhà cung cấp dịch vụ',
        html: `<p>Chúng tôi sử dụng các nhà cung cấp sau, mỗi bên có điều khoản quyền riêng tư riêng:</p>
<ul>
<li>Google Firebase (Analytics, Crashlytics): ${a(L.firebase, 'Privacy and Security in Firebase')}</li>
<li>Google AdMob: ${a(L.google, 'Chính sách quyền riêng tư của Google')} và ${a(L.partners, 'cách Google sử dụng thông tin từ ứng dụng dùng dịch vụ của Google')}</li>
<li>RevenueCat: ${a(L.revenuecat, 'RevenueCat Privacy Policy')}</li>
<li>Apple App Store: ${a(L.apple, 'Chính sách quyền riêng tư của Apple')}</li>
<li>Google Play: ${a(L.google, 'Chính sách quyền riêng tư của Google')}</li>
</ul>
<p>Các nhà cung cấp này có thể xử lý dữ liệu tại Hoa Kỳ và các quốc gia khác, với các biện pháp bảo vệ như điều khoản hợp đồng tiêu chuẩn cho việc chuyển dữ liệu quốc tế.</p>`,
      },
      {
        id: 'retention',
        title: '8. Lưu giữ và xoá',
        html: `<p>Dữ liệu trên thiết bị tồn tại cho đến khi bạn hoặc ứng dụng xoá. Để tiết kiệm bộ nhớ, ứng dụng xoá các bản ghi đã <strong>gửi thành công</strong> khi chúng cũ hơn 30 ngày hoặc vượt quá 5.000 bản ghi mới nhất của mỗi biểu mẫu. Bản ghi chưa gửi không bao giờ bị tự động xoá. Bạn có thể xoá bản ghi, biểu mẫu và ảnh trong ứng dụng bất cứ lúc nào, hoặc xoá ứng dụng để xoá tất cả (xem mục 2 về cài đặt nơi nhận trên iOS).</p>
<p>Dữ liệu analytics và báo cáo lỗi được Google lưu giữ theo thời hạn cài đặt trong dự án Firebase của chúng tôi và chính sách của Google, sau đó bị xoá. Vì dữ liệu chúng tôi nhận không gắn với danh tính của bạn, chúng tôi thường không thể tìm dữ liệu của một người cụ thể. Nếu bạn muốn chúng tôi thử, hãy gửi email và chúng tôi sẽ hỗ trợ trong khả năng có thể.</p>`,
      },
      {
        id: 'rights',
        title: '9. Lựa chọn và quyền của bạn',
        html: `<ul>
<li>Tắt analytics trong Cài đặt › Ứng dụng › Chia sẻ thống kê sử dụng.</li>
<li>Thay đổi lựa chọn đồng ý quảng cáo ở nơi áp dụng biểu mẫu đồng ý của Google, hoặc nâng cấp Pro để bỏ quảng cáo.</li>
<li>Xoá bản ghi, biểu mẫu hoặc ứng dụng bất cứ lúc nào.</li>
</ul>
<p>Tuỳ nơi bạn sống, bao gồm Việt Nam, EU, Vương quốc Anh và California, bạn có thể có quyền truy cập, chỉnh sửa, xoá hoặc hạn chế xử lý dữ liệu cá nhân, phản đối việc xử lý, yêu cầu chuyển dữ liệu, và khiếu nại với cơ quan bảo vệ dữ liệu. Liên hệ ${mail} để thực hiện các quyền này.</p>`,
      },
      {
        id: 'children',
        title: '10. Trẻ em',
        html: `<p>Ứng dụng là công cụ kinh doanh và năng suất, không hướng tới trẻ em dưới 13 tuổi (hoặc dưới 16 tuổi nơi luật địa phương quy định cao hơn). Chúng tôi không cố ý thu thập dữ liệu cá nhân của trẻ em.</p>`,
      },
      {
        id: 'security',
        title: '11. Bảo mật',
        html: `<p>Bí mật được giữ trong Keychain hoặc Keystore và không bao giờ xuất hiện trong bản ghi, tệp xuất, log, báo cáo lỗi hay analytics. Tuy vậy, người kiểm soát thiết bị đã mở khoá của bạn có thể trích xuất thông tin xác thực đã lưu. Hãy dùng token có phạm vi hẹp cho nơi nhận.</p>`,
      },
      {
        id: 'website',
        title: '12. Trang web này',
        html: `<p>Trang web này là trang tĩnh lưu trữ trên GitHub Pages. Trang không dùng cookie, analytics hay công cụ theo dõi, và phông chữ được phục vụ từ chính trang. GitHub có thể ghi thông tin kỹ thuật như địa chỉ IP để vận hành và bảo mật dịch vụ: xem ${a(L.github, 'GitHub General Privacy Statement')}.</p>`,
      },
      {
        id: 'changes',
        title: '13. Thay đổi chính sách',
        html: `<p>Nếu chúng tôi thay đổi dữ liệu ứng dụng thu thập, chúng tôi sẽ cập nhật chính sách này và nhãn quyền riêng tư trên cửa hàng trong cùng bản phát hành, và đổi ngày “Cập nhật lần cuối” ở trên. Với thay đổi quan trọng, chúng tôi sẽ thông báo trong ứng dụng hoặc trên trang này.</p>`,
      },
      {
        id: 'contact',
        title: '14. Liên hệ',
        html: `<p>${site.developer}, ${site.country.vi}<br>Email: ${mail}</p>
<p><em>Bản tiếng Việt được cung cấp để thuận tiện. Nếu có khác biệt, bản tiếng Anh được ưu tiên áp dụng.</em></p>`,
      },
    ],
  },
};
