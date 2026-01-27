import type { Member } from './types'

export interface MemberProps {
  member: Member
}

export default function Member({ member }: MemberProps) {
  return (
    <div>
      <h2 className="text-lg sm:text-xl lg:text-2xl">{member.title}</h2>
      <p className="text-accent-500 mt-1 text-sm font-semibold">{member.country}</p>
      <div className="mt-4">{member.description}</div>
    </div>
  )
}
