import { getCode, type LoadedLangs } from '@/lib/shiki-code';

type ShikicodeProps = {
  code: string;
  className: string;
  lang: LoadedLangs;
};

export default function ShikiCode({ code, className, lang }: ShikicodeProps) {
  return (
    <pre
      className={`${className} size-full overflow-auto text-[clamp(0.7813rem,0.7442rem+0.1744vw,0.875rem)]`}
      dangerouslySetInnerHTML={{ __html: getCode({ code, lang }) }}
    />
  );
}
