import Link from 'next/link';
import LegalPage from '../../components/loopbot/LegalPage';

/* Published as-is from the official LoopBot terms.md. Don't reword it here. */
export default function LoopBotTerms() {
    return (
        <LegalPage
            title="LoopBot Terms of Use"
            description="The terms for downloading, installing and playing LoopBot, a coding puzzle game by KIS Studios, on Android or on the web."
            path="/loopbot/terms"
            updated="November 7, 2026"
        >
            <p>
                These terms apply when you download, install or play <strong>LoopBot</strong> (the &quot;Game&quot;), made by KIS
                Studios (&quot;we&quot;, &quot;us&quot;), on Android or on the web. By playing the Game, you agree to these terms. If
                you don&apos;t agree, please don&apos;t use the Game.
            </p>

            <h2>1. Who can play</h2>
            <p>
                The Game is made for players aged 13 and up. If you are under the age of majority where you live, please read
                these terms with a parent or guardian.
            </p>

            <h2>2. Your license to play</h2>
            <p>
                We give you a personal, non-exclusive, non-transferable, revocable license to install and play the Game on devices
                you own or control, for your own non-commercial entertainment and learning.
            </p>
            <p>You agree not to:</p>
            <ul>
                <li>copy, sell, rent or redistribute the Game or its content, except as the store you got it from allows;</li>
                <li>reverse engineer, modify or create derivative works of the Game, except where the law allows this despite this restriction;</li>
                <li>use the Game to break any law.</li>
            </ul>
            <p>Sharing screenshots, videos and streams of you playing the Game is welcome.</p>

            <h2>3. Ownership</h2>
            <p>
                The Game, including its code, levels, characters, art, sounds and story, belongs to KIS Studios and is protected
                by copyright and other laws. These terms do not give you any ownership of it. &quot;LoopBot&quot; and the KIS
                Studios name and logos are ours; please don&apos;t use them in a way that suggests we endorse something we
                don&apos;t.
            </p>

            <h2>4. Your data</h2>
            <p>
                The Game collects no personal information. See the <Link href="/loopbot/privacy">LoopBot Privacy Policy</Link>.
            </p>

            <h2>5. Purchases</h2>
            <p>
                LoopBot is currently free and has no in-app purchases. If we add paid content later, we will update these terms
                first. Any purchase through Google Play is also covered by Google Play&apos;s own terms.
            </p>

            <h2>6. Updates and changes</h2>
            <p>
                We may update the Game, change or remove features, or stop offering it. We may also update these terms; the date
                above shows the latest version. If you keep playing after a change, the updated terms apply.
            </p>

            <h2>7. No warranty</h2>
            <p>
                The Game is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, to the fullest
                extent the law allows. We don&apos;t promise the Game will be error-free or always available.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
                To the fullest extent the law allows, KIS Studios is not liable for any indirect, incidental, special or
                consequential damages, or for any loss of data or progress, arising from your use of the Game. Our total liability
                for any claim about the Game is limited to the amount you paid for it, if any.
            </p>
            <p>Nothing in these terms limits rights you have under consumer protection laws that cannot be waived.</p>

            <h2>9. Ending these terms</h2>
            <p>
                You can stop using the Game at any time by uninstalling it. We may end your license if you break these terms.
                Sections 3, 7, 8 and 10 continue after these terms end.
            </p>

            <h2>10. Governing law</h2>
            <p>
                These terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there,
                without regard to conflict-of-law rules, except where the law of your home country requires otherwise.
            </p>

            <h2>Contact</h2>
            <p>
                Questions about these terms: <a href="mailto:kisstudios98@gmail.com">kisstudios98@gmail.com</a>
            </p>
        </LegalPage>
    );
}
