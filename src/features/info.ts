import { currentLang } from '../i18n';

export function setupInfoModal() {
    const infoBtn = document.getElementById("info-btn");
    const infoModal = document.getElementById("info-modal-overlay");
    const infoClose = document.getElementById("close-info-modal-btn");
    const infoModalTitle = document.getElementById("info-modal-title");
    const infoModalContent = document.getElementById("info-modal-content");
    const donateBtnText = document.getElementById("donate-btn-text"); 
    const infoTexts = {
        tr: {
            title: "Öne Çıkan Özellikler",
            content: `
                <ul style="padding-left: 1.2rem; margin-bottom: 1rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li><strong>📄 Transkript İçe Aktarma:</strong> A7 veya E-Devlet transkriptinizi (.pdf) yükleyerek tüm geçmiş ders notlarınızı tek tuşla sisteme çekin. Verileriniz sunucuya yüklenmez, sadece tarayıcınızda işlenir.</li>
                    <li><strong>🔗 İnteraktif Ön Koşul Ağacı:</strong> Bir dersin üzerine geldiğinizde, o derse bağlı olan veya o dersin açtığı tüm dersleri dinamik oklarla görüntüleyebilirsiniz.</li>
                    <li><strong>🧮 Akıllı GPA Simülasyonu:</strong> <span style="display:inline-flex; align-items:center; transform:translateY(3px);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg></span> ikonuna tıklayarak hedef ortalamanızı belirleyin veya manuel simülasyon ile gelecekteki notlarınızı senaryolaştırın.</li>
                    <li><strong>🔒 Kilit Sistemi (Logic Lock):</strong> Henüz ön koşulunu vermediğiniz bir dersi seçmenizi engelleyerek hatalı program yapma riskini ortadan kaldırır.</li>
                    <li><strong>🎨 Gelişmiş Tema Sistemi:</strong> Sağ üstteki palet ikonuyla Açık, Koyu veya Rose renk teması seçimi yapabilir, sistemini kişiselleştirebilirsiniz.</li>
                    <li><strong>💾 LocalStorage Teknolojisi:</strong> Üyelik gerektirmez! Tüm verileriniz sadece kendi tarayıcınızda saklanır ve sayfayı yenilediğinizde kaybolmaz.</li>
                    <li><strong>📱 Uygulama Olarak Yükleme (PWA):</strong> İnternet tarayıcısı menüsünden "Ana Ekrana Ekle" (Add to Home Screen) diyerek, bunu telefonda veya bilgisayarda tam ekran çalışan gerçek bir uygulama gibi kullanabilirsiniz!</li>
                </ul>
                
                <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; text-align: center; font-size: 1rem; color: var(--c-primary);">İletişim & Destek</h4>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 0;">
                    <a href="https://discord.gg/VYSHBqnA" target="_blank" style="color: var(--c-text-main); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-surface-border); transition: all 0.2s;" onmouseover="this.style.color='#5865F2'; this.style.transform='translateY(-2px)'" onmouseout="this.style.color='var(--c-text-main)'; this.style.transform='translateY(0)'" title="Discord Profilim">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/hizirketenci_/" target="_blank" style="color: var(--c-text-main); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-surface-border); transition: all 0.2s;" onmouseover="this.style.color='#E1306C'; this.style.transform='translateY(-2px)'" onmouseout="this.style.color='var(--c-text-main)'; this.style.transform='translateY(0)'" title="Instagram Profilim">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/hızır-ketenci/" target="_blank" style="color: var(--c-text-main); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-surface-border); transition: all 0.2s;" onmouseover="this.style.color='#0A66C2'; this.style.transform='translateY(-2px)'" onmouseout="this.style.color='var(--c-text-main)'; this.style.transform='translateY(0)'" title="LinkedIn Bağlantım">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            `,
            donate: "Mükemmel Özellikler İçin Bağış Yaparak Destek Ol!"
        },
        en: {
            title: "Key Features",
            content: `
                <ul style="padding-left: 1.2rem; margin-bottom: 1rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li><strong>📄 Import Transcript:</strong> Upload your A7 or E-Devlet transcript (.pdf) to instantly load all your past grades. Everything is processed securely offline in your browser.</li>
                    <li><strong>🔗 Interactive Prerequisite Tree:</strong> Hover over any course to visualize its prerequisites and the courses it unlocks with dynamic arrows.</li>
                    <li><strong>🧮 Smart GPA Simulation:</strong> Click the <span style="display:inline-flex; align-items:center; transform:translateY(3px);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg></span> icon to set a target GPA or use manual simulation to run scenarios for your future grades.</li>
                    <li><strong>🔒 Logic Lock:</strong> Prevents you from selecting courses if you haven't met their prerequisites, eliminating the risk of making invalid schedules.</li>
                    <li><strong>🎨 Advanced Theme System:</strong> Customize your experience by choosing Light, Dark, or Rose themes using the palette icon on the top right.</li>
                    <li><strong>💾 LocalStorage Technology:</strong> No account required! All your data is saved securely in your browser and won't be lost when you refresh the page.</li>
                    <li><strong>📱 Install as App (PWA):</strong> Use your browser's "Add to Home Screen" option to install this tool and use it like a native full-screen app on your phone or PC!</li>
                </ul>

                <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; text-align: center; font-size: 1rem; color: var(--c-primary);">Contact & Support</h4>
                <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 0;">
                    <a href="https://discord.gg/VYSHBqnA" target="_blank" style="color: var(--c-text-main); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-surface-border); transition: all 0.2s;" onmouseover="this.style.color='#5865F2'; this.style.transform='translateY(-2px)'" onmouseout="this.style.color='var(--c-text-main)'; this.style.transform='translateY(0)'" title="My Discord Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/hizirketenci_/" target="_blank" style="color: var(--c-text-main); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-surface-border); transition: all 0.2s;" onmouseover="this.style.color='#E1306C'; this.style.transform='translateY(-2px)'" onmouseout="this.style.color='var(--c-text-main)'; this.style.transform='translateY(0)'" title="My Instagram Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/hızır-ketenci/" target="_blank" style="color: var(--c-text-main); text-decoration: none; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--c-surface-border); transition: all 0.2s;" onmouseover="this.style.color='#0A66C2'; this.style.transform='translateY(-2px)'" onmouseout="this.style.color='var(--c-text-main)'; this.style.transform='translateY(0)'" title="My LinkedIn URL">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            `,
            donate: "Support with a Donation for Awesome Features!"
        }
    };

    if (infoBtn && infoModal && infoModalTitle && infoModalContent) {
        infoBtn.addEventListener("click", () => {
            const lang = currentLang;
            infoModalTitle.innerHTML = infoTexts[lang].title;
            infoModalContent.innerHTML = infoTexts[lang].content;
            if (donateBtnText) donateBtnText.innerText = infoTexts[lang].donate;
            infoModal.style.display = "flex";
        });
        const closeInfo = () => { infoModal.style.display = "none"; };
        if (infoClose) infoClose.addEventListener("click", closeInfo);
        
        infoModal.addEventListener("click", (e) => {
            if (e.target === infoModal) closeInfo();
        });
    }
}
