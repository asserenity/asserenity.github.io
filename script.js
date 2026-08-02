// ============================================================
//  Данные разделов TOS — каждый раздел как объект
// ============================================================
const sections = [
    {
        number: '01',
        title: 'Acceptance & Definitions',
        text: `By using any software, scripts, keys, or services provided by <strong>Arcality</strong> (the "Service"), you agree to be bound by these Terms. If you do not agree, stop using everything immediately.`,
        list: [
            '<strong>Service</strong> – all software, scripts, keys, APIs, and related stuff we provide.',
            '<strong>User</strong> – you, the person using it.',
            '<strong>Key</strong> – your license key or access token.',
            '<strong>HWID</strong> – your hardware ID, used for identification.',
            '<strong>Telemetry</strong> – data we collect as described below.'
        ],
        extra: `You confirm you are at least 13 (or legal age in your country) and that your use doesn't break any laws or third-party rules.`
    },
    {
        number: '02',
        title: 'Data Collection (We Watch You)',
        text: `You agree that we collect: IP address (and rough location), HWID, and your usernames. This is only for security, anti-fraud, and blacklisting. We don't sell it. We keep it forever if we want.`
    },
    {
        number: '03',
        title: 'License & Access',
        text: `We give you a personal, non-transferable, revocable license to use the Service for your own non-commercial use.`,
        list: [
            'You are <strong>NOT</strong> allowed to share, sell, or give your Key to anyone.',
            'You are <strong>NOT</strong> allowed to reverse engineer or crack anything.',
            'You are <strong>NOT</strong> allowed to bypass our security.'
        ],
        extra: `Do any of that and your access is gone instantly – no refunds, no appeals.`
    },
    {
        number: '04',
        title: 'Payments & Refunds',
        text: `All sales are final. <strong>No refunds. Ever. For any reason.</strong> If you chargeback, we will blacklist you and treat it as fraud.`
    },
    {
        number: '05',
        title: 'Service Changes & Availability',
        text: `We can change, remove, or shut down the Service at any time, without warning. We don't guarantee uptime. We are not liable for any loss if we do.`
    },
    {
        number: '06',
        title: 'Termination & Blacklist',
        text: `We can terminate or blacklist anyone at any time, for any reason or no reason. No explanation, no appeal. Violating these Terms, sharing keys, being toxic – all valid reasons. You lose everything you paid.`
    },
    {
        number: '07',
        title: 'Disclaimer of Warranties',
        text: `The Service is provided "<strong>AS IS</strong>" and "<strong>AS AVAILABLE</strong>". No warranties of any kind. We don't promise it works, is secure, or meets your expectations. Use at your own risk.`
    },
    {
        number: '08',
        title: 'Limitation of Liability',
        text: `To the maximum extent allowed, we are not liable for any damages, loss of profits, data, or anything else. If we somehow are liable, our total liability is <strong>$0.00</strong>. Seriously.`
    },
    {
        number: '09',
        title: 'Indemnification',
        text: `You agree to defend us against any claims arising from your use of the Service.`
    },
    {
        number: '10',
        title: 'Third‑Party Platforms',
        text: `We are not affiliated with Roblox or any other platform. Their changes are not our problem.`
    },
    {
        number: '11',
        title: 'Force Majeure',
        text: `We are not liable if the internet breaks, the moon explodes, or Roblox updates.`
    },
    {
        number: '12',
        title: 'Governing Law',
        text: `These Terms are governed by the laws of the <strong>Internet</strong> – no specific country. Any disputes will be resolved by us, in our head, and you waive any class action rights.`
    },
    {
        number: '13',
        title: 'Severability',
        text: `If any part is invalid, the rest still stands.`
    },
    {
        number: '14',
        title: 'Entire Agreement',
        text: `These Terms are the whole deal.`
    },
    {
        number: '15',
        title: 'Modifications',
        text: `We can change these Terms anytime. Continued use means you accept the new version.`
    },
    {
        number: '16',
        title: 'Contact',
        text: `For questions, reach out:`,
        list: [
            '<strong>Discord:</strong> <a href="https://discord.gg/DvbwaXBb2R" target="_blank">@fadepotion</a> (DM us, but we might not reply)',
            '<strong>Official Server:</strong> <a href="https://discord.gg/DvbwaXBb2R" target="_blank">discord.gg/DvbwaXBb2R</a>',
            '<strong>Telegram:</strong> <a href="https://t.me/psylocibins" target="_blank">@psylocibins</a> or <a href="https://t.me/binancuse" target="_blank">@binancuse</a>'
        ],
        extra: `<em>We don't have email. Don't ask.</em>`,
        isContact: true // специальный класс для стилизации
    }
];

// ============================================================
//  Функция рендеринга
// ============================================================
function renderTOS() {
    const container = document.getElementById('tos-content');
    if (!container) return;

    container.innerHTML = '';

    sections.forEach((sec, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'tos-section' + (sec.isContact ? ' contact-section' : '');

        // Номер
        const numberSpan = document.createElement('span');
        numberSpan.className = 'section-number';
        numberSpan.textContent = sec.number;
        sectionDiv.appendChild(numberSpan);

        // Заголовок
        const title = document.createElement('h2');
        title.className = 'section-title';
        title.innerHTML = `<span class="title-number">${sec.number}.</span> ${sec.title}`;
        sectionDiv.appendChild(title);

        // Основной текст
        if (sec.text) {
            const p = document.createElement('p');
            p.className = 'section-text';
            p.innerHTML = sec.text;
            sectionDiv.appendChild(p);
        }

        // Список
        if (sec.list && sec.list.length) {
            const ul = document.createElement('ul');
            ul.className = 'section-list';
            sec.list.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                ul.appendChild(li);
            });
            sectionDiv.appendChild(ul);
        }

        // Дополнительный текст после списка
        if (sec.extra) {
            const pExtra = document.createElement('p');
            pExtra.className = 'section-text';
            pExtra.innerHTML = sec.extra;
            sectionDiv.appendChild(pExtra);
        }

        container.appendChild(sectionDiv);
    });
}

// Запуск
document.addEventListener('DOMContentLoaded', renderTOS);
