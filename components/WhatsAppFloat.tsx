import { WhatsAppMark } from '@/components/WhatsAppMark'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917598969875"
      target="_blank"
      rel="noreferrer"
      title="WhatsApp EuroZiel"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[9998] flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_18px_rgba(37,211,102,0.32)] transition-all duration-200 hover:scale-[1.08] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] sm:bottom-[26px] sm:right-[26px]"
    >
      <WhatsAppMark className="h-7 w-7" />
    </a>
  )
}
