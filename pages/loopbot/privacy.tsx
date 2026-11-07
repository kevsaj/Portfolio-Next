import LegalPage from '../../components/loopbot/LegalPage';

/* Published as-is from the official LoopBot privacy.md. Don't reword it here. */
export default function LoopBotPrivacy() {
    return (
        <LegalPage
            title="LoopBot Privacy Policy"
            description="LoopBot collects no personal data. No accounts, ads, analytics or tracking. Your progress is saved only on your device."
            path="/loopbot/privacy"
            updated="November 7, 2026"
        >
            <p>
                This policy covers <strong>LoopBot</strong>, a puzzle game by KIS Studios (&quot;we&quot;, &quot;us&quot;),
                including the LoopBot app for Android and the LoopBot web demo on itch.io.
            </p>

            <h2>The short version</h2>
            <p>LoopBot does not collect, store or share any personal information. There are no accounts, ads, analytics or tracking.</p>

            <h2>What we collect</h2>
            <p>Nothing.</p>
            <ul>
                <li><strong>No accounts.</strong> You never sign in or give us your name, email address or age.</li>
                <li><strong>No ads, analytics or tracking.</strong> The game contains no advertising, analytics or tracking code, and it does not connect to the internet while you play.</li>
                <li><strong>No device permissions.</strong> The app does not use your camera, microphone, location, contacts, photos or files.</li>
            </ul>

            <h2>What stays on your device</h2>
            <p>
                Your progress (floors cleared, stars, hints) and the programs you build are saved only on your device, in the
                app&apos;s own storage. We never receive them.
            </p>
            <p>
                If Android backup is turned on for your device, Android may include this game data in your personal backup with
                Google. That backup is handled by Google under{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>,
                not by us. Uninstalling the app or clearing its storage deletes your game data from the device.
            </p>
            <p>
                The web demo is hosted by itch.io, which has its own{' '}
                <a href="https://itch.io/docs/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
                The demo saves your progress in your browser&apos;s local storage.
            </p>

            <h2>Google Play</h2>
            <p>
                When you download LoopBot from Google Play, Google may collect information about that download and your device
                under its own privacy policy. We may see aggregated, anonymous statistics that Google Play Console provides to
                every developer, such as install counts and crash reports. These never identify you to us.
            </p>

            <h2>Children</h2>
            <p>
                LoopBot is made for players aged 13 and up and is not directed at children under 13. Because the game collects
                no personal information, it collects none from children either.
            </p>

            <h2>Changes to this policy</h2>
            <p>
                If this policy changes, we will post the new version on this page and update the date above. If a future version
                of LoopBot adds anything that collects data (for example, in-app purchases), we will update this policy before
                that version is released.
            </p>

            <h2>Contact</h2>
            <p>
                Questions about this policy: <a href="mailto:kisstudios98@gmail.com">kisstudios98@gmail.com</a>
            </p>
        </LegalPage>
    );
}
