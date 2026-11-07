// Terms of Use. Includes the auto-renewing subscription disclosure required by
// App Store Review Guideline 3.1.2 and Apple's minimum terms for a custom EULA.
import { site } from '../../site.config.mjs';

const L = {
  appleEula: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  appleSubs: 'https://support.apple.com/en-us/118428',
  playSubs: 'https://support.google.com/googleplay/answer/7018481',
  appleRefund: 'https://support.apple.com/en-us/118223',
  playRefund: 'https://support.google.com/googleplay/answer/2479637',
  playTerms: 'https://play.google.com/about/play-terms/',
};
const a = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;
const mail = `<a href="mailto:${site.email}">${site.email}</a>`;

export const terms = {
  en: {
    title: 'Terms of Use',
    description: 'The terms for using the Scan to Flow app, including the Pro subscription.',
    summaryTitle: 'The short version',
    summary: [
      'You may use Scan to Flow for personal or business work. The free version has ads and limits; Pro removes them.',
      'Pro is an auto-renewing subscription, billed by Apple or Google. Cancel at least 24 hours before it renews.',
      'You are responsible for the data you collect and for the servers you send it to.',
      'The app is provided “as is”. Always check that important data reached its destination.',
    ],
    sections: [
      {
        id: 'agreement',
        title: '1. Agreement',
        html: `<p>These Terms of Use (“Terms”) are an agreement between you and ${site.developer} (“we”, “us”), the developer of Scan to Flow (“the app”). By downloading or using the app, you agree to these Terms. If you do not agree, do not use the app.</p>
<p>If you downloaded the app from the Apple App Store, Apple’s ${a(L.appleEula, 'Licensed Application End User License Agreement')} also applies, together with section 12 below. If you downloaded it from Google Play, the ${a(L.playTerms, 'Google Play Terms of Service')} also apply. If these Terms conflict with those store terms, the store terms apply to the extent of the conflict.</p>`,
      },
      {
        id: 'license',
        title: '2. License',
        html: `<p>We grant you a personal, non-exclusive, non-transferable, revocable license to use the app on devices you own or control, for your own personal or internal business purposes, under these Terms and the usage rules of the store you got it from.</p>
<p>You must not: copy, modify, decompile or reverse engineer the app, except where the law allows it; rent, sell or redistribute it; get around its subscription or usage limits; or use it for anything unlawful, or to collect data you have no right to collect.</p>`,
      },
      {
        id: 'your-data',
        title: '3. Your data and your destinations',
        html: `<p>The app stores your forms and records on your device and sends them only to the destinations you configure, such as a webhook or API. We do not host, receive or back up your data. See the <a href="../privacy/">Privacy Policy</a>.</p>
<ul>
<li>You are responsible for the data you collect, including any personal data about other people, and for having a legal basis to collect and send it.</li>
<li>You are responsible for your destinations: that you are allowed to send data to them, that they are secure, and for the credentials you store in the app. Use narrowly scoped tokens.</li>
<li>If you choose plain HTTP instead of HTTPS, your data is not encrypted in transit.</li>
<li>Sending runs while the app is open. A record counts as delivered only when your server confirms it. Check that important data has arrived.</li>
</ul>`,
      },
      {
        id: 'free',
        title: '4. The free version',
        html: `<p>The app is free to download and use, with ads and these limits:</p>
<ul>
<li>20 successful send requests per installation, counted on your device. Records sent together in one batch count as one request.</li>
<li>Export of up to the newest 100 records at a time.</li>
</ul>
<p>Records held back by a limit stay in the queue and are not lost. We may change the free limits or the features of the free version in a future update.</p>`,
      },
      {
        id: 'pro',
        title: '5. Pro subscription',
        html: `<p>Scan to Flow Pro removes ads and the free limits. It is offered as an <strong>auto-renewing subscription</strong>, monthly or yearly.</p>
<ul>
<li><strong>Price:</strong> shown in the app, in your local currency, before you buy.</li>
<li><strong>Payment:</strong> charged to your Apple ID or Google account when you confirm the purchase.</li>
<li><strong>Renewal:</strong> the subscription renews automatically for the same period and price unless you cancel it at least 24 hours before the end of the current period. Your account is charged for the renewal within the 24 hours before the current period ends.</li>
<li><strong>Cancel or manage:</strong> in your store account’s subscription settings, at any time after purchase. In the app, “Manage account” opens these settings. Cancelling stops the next renewal; Pro stays active until the end of the period you paid for. See ${a(L.appleSubs, 'Apple’s guide')} or ${a(L.playSubs, 'Google’s guide')}.</li>
<li><strong>Free trial:</strong> if a free trial is offered, any unused part of it ends when you buy a subscription. If you do not cancel before the trial ends, the subscription starts and you are charged.</li>
<li><strong>Price changes:</strong> handled by Apple or Google under their rules, which include notifying you and, where required, asking for your consent.</li>
<li><strong>Restore:</strong> use “Restore purchases” in the app to restore Pro on a new or reinstalled device signed in to the same store account.</li>
<li><strong>Refunds:</strong> payments are processed by Apple or Google, and refunds follow their policies (${a(L.appleRefund, 'Apple')}, ${a(L.playRefund, 'Google Play')}). We cannot issue refunds directly.</li>
</ul>`,
      },
      {
        id: 'ads',
        title: '6. Ads',
        html: `<p>The free version shows non-personalized ads served by Google AdMob. We are not responsible for the content of third-party ads or for the products and websites they link to.</p>`,
      },
      {
        id: 'changes-app',
        title: '7. Updates and availability',
        html: `<p>We may update, change or remove features of the app, and may stop offering it. If we stop offering Pro, active subscriptions will not renew. Some updates may be required to keep using the app. We do not guarantee that the app will be available, error-free or compatible with every device or destination.</p>`,
      },
      {
        id: 'disclaimer',
        title: '8. Disclaimer',
        html: `<p>To the fullest extent permitted by law, the app is provided “as is” and “as available”, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose and non-infringement. Scanning accuracy depends on the code, the camera, lighting and other conditions. You are responsible for checking the accuracy of your data and for decisions you make based on it.</p>`,
      },
      {
        id: 'liability',
        title: '9. Limitation of liability',
        html: `<p>To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, profits, revenue or business, arising from your use of or inability to use the app, including data that was not delivered, was delivered more than once, or was handled by your destination. Our total liability for any claim relating to the app is limited to the amount you paid for the app in the 12 months before the claim.</p>
<p>Nothing in these Terms limits rights you have as a consumer that cannot be limited by contract under the law of your country of residence.</p>`,
      },
      {
        id: 'termination',
        title: '10. Termination',
        html: `<p>You may stop using the app at any time by deleting it. Cancelling an active subscription is done in your store account (section 5). Your license ends automatically if you break these Terms. Sections 3, 8, 9 and 11 continue to apply after termination.</p>`,
      },
      {
        id: 'law',
        title: '11. Governing law',
        html: `<p>These Terms are governed by the laws of Vietnam, without regard to conflict-of-law rules. This does not take away the protection of mandatory consumer laws of the country where you live. Before taking any formal action, please contact us so we can try to resolve the issue.</p>`,
      },
      {
        id: 'apple',
        title: '12. Additional terms for the Apple App Store',
        html: `<p>If you obtained the app from the Apple App Store, you and we acknowledge that:</p>
<ol>
<li>These Terms are between you and us only, not with Apple Inc. (“Apple”). We, not Apple, are solely responsible for the app and its content.</li>
<li>Your license is limited to using the app on Apple-branded products that you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions, except that the app may be accessed by other accounts associated with you through Family Sharing or volume purchasing.</li>
<li>We are solely responsible for providing any maintenance and support for the app. Apple has no obligation to provide any maintenance or support services for the app.</li>
<li>We are solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the app. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the app.</li>
<li>We, not Apple, are responsible for addressing any claims by you or a third party relating to the app or your possession or use of it, including product liability claims, claims that the app fails to conform to any legal or regulatory requirement, and claims arising under consumer protection, privacy or similar laws.</li>
<li>If a third party claims that the app or your possession and use of it infringes their intellectual property rights, we, not Apple, are solely responsible for the investigation, defense, settlement and discharge of that claim.</li>
<li>You represent and warrant that you are not located in a country that is subject to a U.S. Government embargo or that has been designated by the U.S. Government as a “terrorist supporting” country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
<li>You must comply with applicable third-party terms when using the app, for example your mobile carrier’s or network provider’s terms.</li>
<li>Apple and its subsidiaries are third-party beneficiaries of these Terms, and once you accept them, Apple has the right (and will be deemed to have accepted the right) to enforce them against you as a third-party beneficiary.</li>
</ol>
<p>Questions, complaints or claims about the app should be sent to us at the contact details below.</p>`,
      },
      {
        id: 'changes',
        title: '13. Changes to these Terms',
        html: `<p>We may update these Terms. We will change the “Last updated” date above and, for significant changes, give notice in the app or on this page. If you keep using the app after a change takes effect, you accept the updated Terms.</p>`,
      },
      {
        id: 'contact',
        title: '14. Contact',
        html: `<p>${site.developer}, ${site.country.en}<br>Email: ${mail}</p>`,
      },
    ],
  },

  vi: {
    title: 'Điều khoản sử dụng',
    description: 'Điều khoản sử dụng ứng dụng Scan to Flow, bao gồm gói đăng ký Pro.',
    summaryTitle: 'Tóm tắt',
    summary: [
      'Bạn có thể dùng Scan to Flow cho công việc cá nhân hoặc kinh doanh. Bản miễn phí có quảng cáo và giới hạn; Pro gỡ bỏ chúng.',
      'Pro là gói đăng ký tự động gia hạn, thanh toán qua Apple hoặc Google. Huỷ ít nhất 24 giờ trước khi gia hạn.',
      'Bạn chịu trách nhiệm về dữ liệu bạn thu thập và các máy chủ bạn gửi dữ liệu tới.',
      'Ứng dụng được cung cấp “nguyên trạng”. Hãy luôn kiểm tra dữ liệu quan trọng đã đến nơi nhận.',
    ],
    sections: [
      {
        id: 'agreement',
        title: '1. Thoả thuận',
        html: `<p>Điều khoản sử dụng này (“Điều khoản”) là thoả thuận giữa bạn và ${site.developer} (“chúng tôi”), nhà phát triển Scan to Flow (“ứng dụng”). Khi tải hoặc sử dụng ứng dụng, bạn đồng ý với Điều khoản này. Nếu không đồng ý, vui lòng không sử dụng ứng dụng.</p>
<p>Nếu bạn tải ứng dụng từ Apple App Store, ${a(L.appleEula, 'Thoả thuận cấp phép người dùng cuối (EULA) của Apple')} cũng được áp dụng, cùng với mục 12 bên dưới. Nếu bạn tải từ Google Play, ${a(L.playTerms, 'Điều khoản dịch vụ của Google Play')} cũng được áp dụng. Nếu Điều khoản này mâu thuẫn với điều khoản của cửa hàng, điều khoản của cửa hàng được ưu tiên trong phạm vi mâu thuẫn.</p>`,
      },
      {
        id: 'license',
        title: '2. Giấy phép',
        html: `<p>Chúng tôi cấp cho bạn giấy phép cá nhân, không độc quyền, không chuyển nhượng, có thể thu hồi để sử dụng ứng dụng trên thiết bị bạn sở hữu hoặc kiểm soát, cho mục đích cá nhân hoặc nội bộ doanh nghiệp, theo Điều khoản này và quy tắc sử dụng của cửa hàng bạn tải ứng dụng.</p>
<p>Bạn không được: sao chép, sửa đổi, dịch ngược ứng dụng, trừ khi luật cho phép; cho thuê, bán hoặc phân phối lại; lách gói đăng ký hoặc giới hạn sử dụng; hoặc dùng ứng dụng cho mục đích trái pháp luật hay để thu thập dữ liệu bạn không có quyền thu thập.</p>`,
      },
      {
        id: 'your-data',
        title: '3. Dữ liệu và nơi nhận của bạn',
        html: `<p>Ứng dụng lưu biểu mẫu và bản ghi trên thiết bị của bạn và chỉ gửi chúng tới nơi nhận bạn cấu hình, như webhook hoặc API. Chúng tôi không lưu trữ, không nhận và không sao lưu dữ liệu của bạn. Xem <a href="../privacy/">Chính sách quyền riêng tư</a>.</p>
<ul>
<li>Bạn chịu trách nhiệm về dữ liệu bạn thu thập, bao gồm dữ liệu cá nhân của người khác, và phải có cơ sở pháp lý để thu thập và gửi dữ liệu đó.</li>
<li>Bạn chịu trách nhiệm về nơi nhận: bạn được phép gửi dữ liệu tới đó, nơi nhận được bảo mật, và về thông tin xác thực bạn lưu trong ứng dụng. Hãy dùng token có phạm vi hẹp.</li>
<li>Nếu bạn chọn HTTP thay vì HTTPS, dữ liệu không được mã hoá trên đường truyền.</li>
<li>Việc gửi chạy khi ứng dụng đang mở. Bản ghi chỉ được tính là đã gửi khi máy chủ của bạn xác nhận. Hãy kiểm tra dữ liệu quan trọng đã đến nơi.</li>
</ul>`,
      },
      {
        id: 'free',
        title: '4. Bản miễn phí',
        html: `<p>Ứng dụng được tải và sử dụng miễn phí, có quảng cáo và các giới hạn sau:</p>
<ul>
<li>20 lượt gửi thành công cho mỗi lượt cài đặt, được đếm trên thiết bị. Các bản ghi gửi cùng một lô được tính là một lượt.</li>
<li>Mỗi lần xuất tối đa 100 bản ghi mới nhất.</li>
</ul>
<p>Bản ghi bị giữ lại do giới hạn vẫn nằm trong hàng đợi và không bị mất. Chúng tôi có thể thay đổi giới hạn hoặc tính năng của bản miễn phí trong các bản cập nhật sau.</p>`,
      },
      {
        id: 'pro',
        title: '5. Gói đăng ký Pro',
        html: `<p>Scan to Flow Pro gỡ bỏ quảng cáo và các giới hạn miễn phí. Pro là <strong>gói đăng ký tự động gia hạn</strong>, theo tháng hoặc theo năm.</p>
<ul>
<li><strong>Giá:</strong> hiển thị trong ứng dụng, theo đơn vị tiền tệ của bạn, trước khi mua.</li>
<li><strong>Thanh toán:</strong> được trừ vào Apple ID hoặc tài khoản Google khi bạn xác nhận mua.</li>
<li><strong>Gia hạn:</strong> gói tự động gia hạn với cùng kỳ hạn và mức giá, trừ khi bạn huỷ ít nhất 24 giờ trước khi kỳ hiện tại kết thúc. Tài khoản của bạn bị trừ tiền gia hạn trong vòng 24 giờ trước khi kỳ hiện tại kết thúc.</li>
<li><strong>Huỷ hoặc quản lý:</strong> trong phần gói đăng ký của tài khoản cửa hàng, bất cứ lúc nào sau khi mua. Trong ứng dụng, “Quản lý tài khoản” mở phần cài đặt này. Huỷ sẽ dừng lần gia hạn tiếp theo; Pro vẫn hoạt động đến hết kỳ bạn đã trả. Xem ${a(L.appleSubs, 'hướng dẫn của Apple')} hoặc ${a(L.playSubs, 'hướng dẫn của Google')}.</li>
<li><strong>Dùng thử miễn phí:</strong> nếu có, phần dùng thử chưa sử dụng sẽ kết thúc khi bạn mua gói. Nếu không huỷ trước khi hết dùng thử, gói bắt đầu và bạn bị tính phí.</li>
<li><strong>Thay đổi giá:</strong> do Apple hoặc Google xử lý theo quy định của họ, bao gồm thông báo cho bạn và, khi cần, xin sự đồng ý của bạn.</li>
<li><strong>Khôi phục:</strong> dùng “Khôi phục giao dịch” trong ứng dụng để khôi phục Pro trên thiết bị mới hoặc sau khi cài lại, với cùng tài khoản cửa hàng.</li>
<li><strong>Hoàn tiền:</strong> thanh toán do Apple hoặc Google xử lý, việc hoàn tiền theo chính sách của họ (${a(L.appleRefund, 'Apple')}, ${a(L.playRefund, 'Google Play')}). Chúng tôi không thể hoàn tiền trực tiếp.</li>
</ul>`,
      },
      {
        id: 'ads',
        title: '6. Quảng cáo',
        html: `<p>Bản miễn phí hiển thị quảng cáo không cá nhân hoá do Google AdMob cung cấp. Chúng tôi không chịu trách nhiệm về nội dung quảng cáo của bên thứ ba hay sản phẩm, trang web mà quảng cáo dẫn tới.</p>`,
      },
      {
        id: 'changes-app',
        title: '7. Cập nhật và tính sẵn có',
        html: `<p>Chúng tôi có thể cập nhật, thay đổi hoặc gỡ bỏ tính năng của ứng dụng, và có thể ngừng cung cấp ứng dụng. Nếu ngừng cung cấp Pro, các gói đang hoạt động sẽ không được gia hạn. Một số bản cập nhật có thể bắt buộc để tiếp tục sử dụng. Chúng tôi không bảo đảm ứng dụng luôn sẵn sàng, không có lỗi hoặc tương thích với mọi thiết bị hay nơi nhận.</p>`,
      },
      {
        id: 'disclaimer',
        title: '8. Miễn trừ bảo đảm',
        html: `<p>Trong phạm vi tối đa pháp luật cho phép, ứng dụng được cung cấp “nguyên trạng” và “theo khả năng sẵn có”, không kèm bất kỳ bảo đảm nào, rõ ràng hay ngụ ý, bao gồm khả năng thương mại, phù hợp cho mục đích cụ thể và không vi phạm. Độ chính xác khi quét phụ thuộc vào mã, camera, ánh sáng và điều kiện khác. Bạn chịu trách nhiệm kiểm tra độ chính xác của dữ liệu và các quyết định dựa trên dữ liệu đó.</p>`,
      },
      {
        id: 'liability',
        title: '9. Giới hạn trách nhiệm',
        html: `<p>Trong phạm vi tối đa pháp luật cho phép, chúng tôi không chịu trách nhiệm về thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, do hậu quả hoặc mang tính trừng phạt, hay bất kỳ tổn thất nào về dữ liệu, lợi nhuận, doanh thu hoặc kinh doanh phát sinh từ việc bạn sử dụng hoặc không thể sử dụng ứng dụng, bao gồm dữ liệu không được gửi, bị gửi nhiều lần hoặc được nơi nhận xử lý. Tổng trách nhiệm của chúng tôi cho mọi khiếu nại liên quan đến ứng dụng giới hạn ở số tiền bạn đã trả cho ứng dụng trong 12 tháng trước khiếu nại.</p>
<p>Không điều nào trong Điều khoản này hạn chế các quyền của bạn với tư cách người tiêu dùng mà theo luật nơi bạn cư trú không thể bị hạn chế bằng hợp đồng.</p>`,
      },
      {
        id: 'termination',
        title: '10. Chấm dứt',
        html: `<p>Bạn có thể ngừng dùng ứng dụng bất cứ lúc nào bằng cách xoá ứng dụng. Việc huỷ gói đăng ký đang hoạt động được thực hiện trong tài khoản cửa hàng (mục 5). Giấy phép của bạn tự động chấm dứt nếu bạn vi phạm Điều khoản này. Các mục 3, 8, 9 và 11 vẫn áp dụng sau khi chấm dứt.</p>`,
      },
      {
        id: 'law',
        title: '11. Luật áp dụng',
        html: `<p>Điều khoản này được điều chỉnh bởi pháp luật Việt Nam, không tính đến quy tắc xung đột pháp luật. Điều này không làm mất đi sự bảo vệ của luật bảo vệ người tiêu dùng bắt buộc tại quốc gia bạn sinh sống. Trước khi thực hiện bất kỳ hành động chính thức nào, vui lòng liên hệ chúng tôi để cùng tìm cách giải quyết.</p>`,
      },
      {
        id: 'apple',
        title: '12. Điều khoản bổ sung cho Apple App Store',
        html: `<p>Nếu bạn tải ứng dụng từ Apple App Store, bạn và chúng tôi xác nhận rằng:</p>
<ol>
<li>Điều khoản này chỉ là thoả thuận giữa bạn và chúng tôi, không phải với Apple Inc. (“Apple”). Chúng tôi, không phải Apple, hoàn toàn chịu trách nhiệm về ứng dụng và nội dung của nó.</li>
<li>Giấy phép của bạn giới hạn ở việc sử dụng ứng dụng trên sản phẩm mang thương hiệu Apple mà bạn sở hữu hoặc kiểm soát, theo Quy tắc sử dụng trong Điều khoản và điều kiện của Apple Media Services, ngoại trừ việc ứng dụng có thể được truy cập bởi các tài khoản khác liên kết với bạn qua Chia sẻ trong gia đình hoặc mua số lượng lớn.</li>
<li>Chúng tôi hoàn toàn chịu trách nhiệm cung cấp bảo trì và hỗ trợ cho ứng dụng. Apple không có nghĩa vụ cung cấp bất kỳ dịch vụ bảo trì hay hỗ trợ nào cho ứng dụng.</li>
<li>Chúng tôi hoàn toàn chịu trách nhiệm về mọi bảo đảm sản phẩm, rõ ràng hay ngụ ý theo luật, trong phạm vi không được miễn trừ hợp lệ. Nếu ứng dụng không đáp ứng bảo đảm áp dụng, bạn có thể thông báo cho Apple và Apple sẽ hoàn lại giá mua (nếu có) của ứng dụng. Trong phạm vi tối đa pháp luật cho phép, Apple không có nghĩa vụ bảo đảm nào khác đối với ứng dụng.</li>
<li>Chúng tôi, không phải Apple, chịu trách nhiệm giải quyết mọi khiếu nại của bạn hoặc bên thứ ba liên quan đến ứng dụng hoặc việc bạn sở hữu, sử dụng ứng dụng, bao gồm khiếu nại về trách nhiệm sản phẩm, khiếu nại rằng ứng dụng không tuân thủ yêu cầu pháp lý, và khiếu nại theo luật bảo vệ người tiêu dùng, quyền riêng tư hoặc luật tương tự.</li>
<li>Nếu bên thứ ba khiếu nại rằng ứng dụng hoặc việc bạn sở hữu và sử dụng ứng dụng vi phạm quyền sở hữu trí tuệ của họ, chúng tôi, không phải Apple, hoàn toàn chịu trách nhiệm điều tra, bào chữa, dàn xếp và giải quyết khiếu nại đó.</li>
<li>Bạn cam đoan rằng bạn không ở quốc gia bị Chính phủ Hoa Kỳ cấm vận hoặc bị Chính phủ Hoa Kỳ xếp vào danh sách “hỗ trợ khủng bố”, và bạn không có tên trong bất kỳ danh sách bị cấm hoặc hạn chế nào của Chính phủ Hoa Kỳ.</li>
<li>Bạn phải tuân thủ điều khoản của bên thứ ba áp dụng khi sử dụng ứng dụng, ví dụ điều khoản của nhà mạng hoặc nhà cung cấp mạng.</li>
<li>Apple và các công ty con của Apple là bên thụ hưởng thứ ba của Điều khoản này, và khi bạn chấp nhận Điều khoản, Apple có quyền (và được xem là đã chấp nhận quyền) thực thi Điều khoản này đối với bạn với tư cách bên thụ hưởng thứ ba.</li>
</ol>
<p>Câu hỏi, khiếu nại hoặc yêu cầu về ứng dụng vui lòng gửi cho chúng tôi theo thông tin liên hệ bên dưới.</p>`,
      },
      {
        id: 'changes',
        title: '13. Thay đổi Điều khoản',
        html: `<p>Chúng tôi có thể cập nhật Điều khoản này. Chúng tôi sẽ đổi ngày “Cập nhật lần cuối” ở trên và, với thay đổi quan trọng, thông báo trong ứng dụng hoặc trên trang này. Nếu bạn tiếp tục dùng ứng dụng sau khi thay đổi có hiệu lực, bạn chấp nhận Điều khoản đã cập nhật.</p>`,
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
