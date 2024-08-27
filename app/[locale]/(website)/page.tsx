import { getDic } from '@/app/localization/getDic';
import { type SupportedLocals } from '@/app/localization/locales';

export default async function Home({
 params: { locale },
}: {
 params: { locale: SupportedLocals };
}) {
 const internalDic = await getDic({ locale, path: 'internal' });
 return <div></div>;
}
