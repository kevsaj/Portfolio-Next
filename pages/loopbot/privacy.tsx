import LegalPage from '../../components/loopbot/LegalPage';

/* Published as-is from the official LoopBot privacy.md. Don't reword it here. */
export default function LoopBotPrivacy() {
    return (
        <LegalPage
            title="LoopBot Privacy Policy"
            description="LoopBot collects no personal information. No ads or third-party tracking. Optional anonymous gameplay stats you can turn off, and feedback only if you send it."
            path="/loopbot/privacy"
            updated="November 8, 2026"
        >
            <p>
                This policy covers <strong>LoopBot</strong>, a puzzle game by KIS Studios (&quot;we&quot;, &quot;us&quot;),
                including the LoopBot app for Android and the LoopBot web demo on itch.io.
            </p>

            <h2>The short version</h2>
            <p>
                LoopBot does not collect your name, email address, account or any other personal information. There are no ads
                and no third-party tracking. To make the puzzles better, the Android app can send{' '}
                <strong>anonymous gameplay statistics</strong> (for example, which floors players find hard), and you can turn
                this off at any time in <strong>Settings &gt; Share anonymous stats</strong>. If you choose to send feedback from
                inside the game, we receive your message.
            </p>

            <h2>What we collect</h2>

            <h3>Anonymous gameplay statistics (you can turn these off)</h3>
            <p>While the setting is on, the app sends:</p>
            <ul>
                <li>
                    <strong>Gameplay events:</strong> when you start, clear or leave a floor; whether each run cleared the floor,
                    crashed or ended early; how many commands and steps the program used; hints revealed; stars earned; and the
                    number of seconds spent on a floor.
                </li>
                <li>
                    <strong>App details:</strong> the app version and platform (for example, &quot;android&quot;).
                </li>
                <li>
                    <strong>A random install ID:</strong> a random code created by the app on your device, used only to tell how
                    many different players reached or cleared a floor. It is not your device ID, advertising ID or any account,
                    and it is not linked to your name or any other information about you.
                </li>
            </ul>
            <p>
                We do <strong>not</strong> collect your location, contacts, photos, files, advertising ID, device identifiers or
                anything you type into the game&apos;s programs.
            </p>
            <p>
                <strong>Turning it off:</strong> Go to <strong>Settings &gt; Share anonymous stats</strong>. When you turn it off,
                the app stops sending statistics, deletes its random install ID and discards anything not yet sent. If you turn
                it back on later, a new, unrelated ID is created.
            </p>

            <h3>Feedback you choose to send</h3>
            <p>
                The <strong>Send feedback</strong> screen lets you send us a short message. With it we receive the type you
                picked (stuck, bug, idea or love it), the floor you were on, the app version and platform. Feedback is not
                linked to the random install ID. Please don&apos;t include your name or contact details in the message. If you
                want a reply, email us instead; we will then see your email address and use it only to reply.
            </p>

            <h3>How it is sent and stored</h3>
            <p>
                Statistics and feedback are sent over an encrypted (HTTPS) connection to a Google Apps Script service we run,
                which saves them in a Google Sheet that only KIS Studios can access. Google hosts this service and, like any web
                server, receives your device&apos;s IP address with each request; our script does not record IP addresses.
                Google&apos;s handling is covered by{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
            </p>

            <h3>How we use it</h3>
            <p>
                Only to improve LoopBot: to find floors that are too hard or confusing, fix bugs, and decide what to build next.
                We do not sell or share this data, use it for advertising, or combine it with other data. We keep statistics and
                feedback for up to 24 months, then delete them. To ask us to delete feedback you sent, email us with roughly
                when you sent it and what it said.
            </p>

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
                The demo saves your progress in your browser&apos;s local storage and sends no gameplay statistics; its feedback
                option opens an email.
            </p>

            <h2>Google Play</h2>
            <p>
                When you download LoopBot from Google Play, Google may collect information about that download and your device
                under its own privacy policy. We may see aggregated, anonymous statistics that Google Play Console provides to
                every developer, such as install counts and crash reports. These never identify you to us.
            </p>

            <h2>Children</h2>
            <p>
                LoopBot is made for players aged 13 and up and is not directed at children under 13. We do not knowingly collect
                personal information from children. If you believe a child has sent us personal information in a feedback
                message, email us and we will delete it.
            </p>

            <h2>Changes to this policy</h2>
            <p>
                If this policy changes, we will post the new version on this page and update the date above. If a future version
                of LoopBot collects anything new (for example, for in-app purchases), we will update this policy before
                that version is released.
            </p>

            <h2>Contact</h2>
            <p>
                Questions about this policy or your data: <a href="mailto:kisstudios98@gmail.com">kisstudios98@gmail.com</a>
            </p>
        </LegalPage>
    );
}
