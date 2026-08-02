// ============================================================
//  Содержимое TOS (можно редактировать прямо здесь)
//  Используется сокращённая версия с юмором, но в строгом стиле
// ============================================================
const tosText = `
<div class="section">
    <h2>1. Acceptance & Definitions</h2>
    <p>By using any software, scripts, keys, or services provided by <strong>Arcality</strong> (the "Service"), you agree to be bound by these Terms. If you do not agree, stop using everything immediately.</p>
    <p><strong>Service</strong> – all software, scripts, keys, APIs, and related stuff we provide.<br>
    <strong>User</strong> – you, the person using it.<br>
    <strong>Key</strong> – your license key or access token.<br>
    <strong>HWID</strong> – your hardware ID, used for identification.<br>
    <strong>Telemetry</strong> – data we collect as described below.</p>
    <p>You confirm you are at least 13 (or legal age in your country) and that your use doesn't break any laws or third-party rules.</p>
</div>

<div class="section">
    <h2>2. Data Collection (We Watch You)</h2>
    <p>You agree that we collect: IP address (and rough location), HWID, and your usernames. This is only for security, anti-fraud, and blacklisting. We don't sell it. We keep it forever if we want.</p>
</div>

<div class="section">
    <h2>3. License & Access</h2>
    <p>We give you a personal, non-transferable, revocable license to use the Service for your own non-commercial use.</p>
    <ul>
        <li>You are <strong>NOT</strong> allowed to share, sell, or give your Key to anyone.</li>
        <li>You are <strong>NOT</strong> allowed to reverse engineer or crack anything.</li>
        <li>You are <strong>NOT</strong> allowed to bypass our security.</li>
    </ul>
    <p>Do any of that and your access is gone instantly – no refunds, no appeals.</p>
</div>

<div class="section">
    <h2>4. Payments & Refunds</h2>
    <p>All sales are final. <strong>No refunds. Ever. For any reason.</strong> If you chargeback, we will blacklist you and treat it as fraud.</p>
</div>

<div class="section">
    <h2>5. Service Changes & Availability</h2>
    <p>We can change, remove, or shut down the Service at any time, without warning. We don't guarantee uptime. We are not liable for any loss if we do.</p>
</div>

<div class="section">
    <h2>6. Termination & Blacklist</h2>
    <p>We can terminate or blacklist anyone at any time, for any reason or no reason. No explanation, no appeal. Violating these Terms, sharing keys, being toxic – all valid reasons. You lose everything you paid.</p>
</div>

<div class="section">
    <h2>7. Disclaimer of Warranties</h2>
    <p>The Service is provided "<strong>AS IS</strong>" and "<strong>AS AVAILABLE</strong>". No warranties of any kind. We don't promise it works, is secure, or meets your expectations. Use at your own risk.</p>
</div>

<div class="section">
    <h2>8. Limitation of Liability</h2>
    <p>To the maximum extent allowed, we are not liable for any damages, loss of profits, data, or anything else. If we somehow are liable, our total liability is <strong>$0.00</strong>. Seriously.</p>
</div>

<div class="section">
    <h2>9. Indemnification</h2>
    <p>You agree to defend us against any claims arising from your use of the Service.</p>
</div>

<div class="section">
    <h2>10. Third‑Party Platforms</h2>
    <p>We are not affiliated with Roblox or any other platform. Their changes are not our problem.</p>
</div>

<div class="section">
    <h2>11. Force Majeure</h2>
    <p>We are not liable if the internet breaks, the moon explodes, or Roblox updates.</p>
</div>

<div class="section">
    <h2>12. Governing Law</h2>
    <p>These Terms are governed by the laws of the <strong>Internet</strong> – no specific country. Any disputes will be resolved by us, in our head, and you waive any class action rights.</p>
</div>

<div class="section">
    <h2>13. Severability</h2>
    <p>If any part is invalid, the rest still stands.</p>
</div>

<div class="section">
    <h2>14. Entire Agreement</h2>
    <p>These Terms are the whole deal.</p>
</div>

<div class="section">
    <h2>15. Modifications</h2>
    <p>We can change these Terms anytime. Continued use means you accept the new version.</p>
</div>

<div class="section highlight">
    <h2>16. Contact</h2>
    <p>For questions, reach out:</p>
    <ul>
        <li><strong>Discord:</strong> <a href="https://discord.gg/DvbwaXBb2R" target="_blank">@fadepotion</a> (DM us, but we might not reply – we're busy)</li>
        <li><strong>Official Server:</strong> <a href="https://discord.gg/DvbwaXBb2R" target="_blank">https://discord.gg/DvbwaXBb2R</a></li>
        <li><strong>Telegram:</strong> <a href="https://t.me/psylocibins" target="_blank">@psylocibins</a> or <a href="https://t.me/binancuse" target="_blank">@binancuse</a></li>
    </ul>
    <p><em>We don't have email. Don't ask.</em></p>
</div>
`;

// Вставка текста в контейнер
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tos-content');
    if (container) {
        container.innerHTML = tosText;
    }
});
