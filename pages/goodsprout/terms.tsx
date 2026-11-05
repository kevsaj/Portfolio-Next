import Link from 'next/link';
import LegalPage from '../../components/goodsprout/LegalPage';
import { CONTACT_EMAIL } from '../../utils/site';

export default function GoodsproutTerms() {
    return (
        <LegalPage
            title="Terms of Service"
            description="The terms for using Goodsprout, the 60-second daily gratitude, self-kindness and green living journal, and the optional Goodsprout Plus subscription."
            path="/goodsprout/terms"
            effective="November 5, 2026"
            summary={
                <p>
                    <strong>The short version:</strong> Goodsprout is a personal wellbeing journal. Use it kindly, your
                    entries are yours, and it is not medical advice.
                </p>
            }
        >
            <p>
                Goodsprout is made by KIS Studios (Kevin Sajan), based in Toronto, Ontario, Canada. In these terms,
                &quot;we&quot; and &quot;us&quot; mean KIS Studios.
            </p>

            <h2>Using Goodsprout</h2>
            <p>
                By installing or using Goodsprout you agree to these terms. You must be 18 or older. You may use the app for
                your own personal, non-commercial use.
            </p>

            <h2>Your content</h2>
            <p>
                Everything you write in Goodsprout belongs to you. It is stored on your device, and we don&apos;t receive it.
                You are responsible for keeping your own backups and recovery key. If you lose your phone, your recovery key
                or an encrypted backup&apos;s key, we cannot recover your entries.
            </p>

            <h2>Not medical advice</h2>
            <p>
                Goodsprout offers general wellbeing prompts and information. It is not a medical, psychological or crisis
                service and does not replace professional care. The guides (Maya, Nana June and Grandpa Hari) are fictional
                characters. If you are in crisis, call or text 9-8-8 in Canada or the US, or your local emergency number.
            </p>

            <h2>Environmental figures</h2>
            <p>
                CO₂ and impact numbers shown in the app are rough estimates for encouragement, not precise measurements.
            </p>

            <h2>Goodsprout Plus</h2>
            <p>
                Goodsprout Plus is an optional subscription sold through Google Play or the Apple App Store. Prices are shown
                in the app before you buy. Subscriptions renew automatically until you cancel in your store account settings
                at least 24 hours before the renewal date. Free trials convert to a paid subscription unless cancelled before
                they end. Refunds are handled by the store under its refund policy.
            </p>

            <h2>Acceptable use</h2>
            <p>Don&apos;t reverse engineer, resell or misuse the app, or use it to break the law.</p>

            <h2>Our content</h2>
            <p>
                The app, its characters, writing, artwork and design belong to KIS Studios and are protected by copyright.
                You may not copy or redistribute them.
            </p>

            <h2>Changes and availability</h2>
            <p>
                We may update the app or these terms. If the terms change materially, we will update the date above and note
                it in the release notes. We may stop offering the app; if so, your on-device data stays on your device.
            </p>

            <h2>Disclaimer and liability</h2>
            <p>
                The app is provided &quot;as is&quot; without warranties of any kind. To the extent the law allows, KIS
                Studios is not liable for indirect or consequential losses, or for loss of data stored on your device.
                Nothing in these terms limits rights you have under consumer protection law where you live.
            </p>

            <h2>Contact</h2>
            <p>
                Questions: email <a href={`mailto:${CONTACT_EMAIL}?subject=Goodsprout%20terms`}>{CONTACT_EMAIL}</a>.
                See also our <Link href="/goodsprout/privacy">Privacy Policy</Link>.
            </p>
        </LegalPage>
    );
}
