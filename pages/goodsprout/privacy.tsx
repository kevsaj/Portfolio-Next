import Link from 'next/link';
import LegalPage from '../../components/goodsprout/LegalPage';
import { CONTACT_EMAIL } from '../../utils/site';

export default function GoodsproutPrivacy() {
    return (
        <LegalPage
            title="Privacy Policy"
            description="Goodsprout has no account, no ads and no tracking. Your journal stays in an encrypted database on your phone. Read the full privacy policy."
            path="/goodsprout/privacy"
            effective="November 5, 2026"
            summary={
                <p>
                    <strong>The short version:</strong> Goodsprout has no account and no ads, and it doesn&apos;t track you.
                    Your journal is stored in an encrypted database on your own phone. We never see it.
                </p>
            }
        >
            <p>
                Goodsprout is made by KIS Studios (Kevin Sajan), based in Toronto, Ontario, Canada. In this policy,
                &quot;we&quot; and &quot;us&quot; mean KIS Studios.
            </p>

            <h2>What stays on your device</h2>
            <p>
                Everything you write or choose in Goodsprout stays on your phone: your gratitude, self-kindness and green
                action entries, your mood check-ins, your chosen guide, reminder time, reading progress and other settings.
                This data is kept in an encrypted database whose key is held in your phone&apos;s secure storage (Android
                Keystore or iOS Keychain). It is not sent to us or to anyone else.
            </p>
            <p>
                The guides (Maya, Nana June and Grandpa Hari) are characters with pre-written messages. They don&apos;t read
                your journal, and nothing you write is sent to an AI service.
            </p>

            <h2>What we collect</h2>
            <p>
                In the free app, we collect nothing. Goodsprout has no sign-up, no analytics, no advertising SDKs and no
                advertising ID.
            </p>

            <h2>Goodsprout Plus (subscriptions)</h2>
            <p>
                If you subscribe to Goodsprout Plus, payment is handled by Google Play or the Apple App Store. We use
                RevenueCat, a subscription service, to confirm your subscription. RevenueCat receives a random, anonymous app
                user ID and your purchase history (which plan, when it started and renews). It does not receive your
                journal, your name or your email. See{' '}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat&apos;s privacy policy</a>.
                We use this information only to unlock Plus features and to restore purchases.
            </p>

            <h2>Backups and exports</h2>
            <p>
                You can export your journal or create a backup. These files are saved only where you choose (for example
                your Files app or Google Drive) through your phone&apos;s share sheet. Backups are encrypted with a recovery
                key that only you hold. We never receive these files. If you lose your recovery key, we cannot recover an
                encrypted backup.
            </p>

            <h2>Reminders</h2>
            <p>Daily reminders are scheduled on your phone as local notifications. No server is involved.</p>

            <h2>Support resources</h2>
            <p>
                If an entry suggests you may be having a hard time, Goodsprout shows a support card with crisis resources.
                This check happens entirely on your device and is never reported to anyone. Goodsprout is not a medical or
                mental health service.
            </p>

            <h2>Deleting your data</h2>
            <p>
                You can delete individual entries in the app. Uninstalling Goodsprout, or clearing its storage in your
                phone&apos;s settings, deletes all of its data from your device. If you subscribed to Plus and want
                RevenueCat&apos;s anonymous purchase record deleted, email us and we will request it.
            </p>

            <h2>Children</h2>
            <p>Goodsprout is intended for adults aged 18 and over and is not directed at children.</p>

            <h2>Changes</h2>
            <p>
                If this policy changes, we will update this page and the effective date above. Material changes will also be
                noted in the app&apos;s release notes.
            </p>

            <h2>Contact</h2>
            <p>
                Questions or requests: email <a href={`mailto:${CONTACT_EMAIL}?subject=Goodsprout%20privacy`}>{CONTACT_EMAIL}</a>.
                See also our <Link href="/goodsprout/terms">Terms of Service</Link>.
            </p>
        </LegalPage>
    );
}
