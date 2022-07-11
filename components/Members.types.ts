export interface LatestParty {
  id: number
  name: string
  abbreviation: string
  backgroundColour: string
  foregroundColour: string
  isLordsMainParty: boolean
  isLordsSpiritualParty: boolean
  governmentType: number
  isIndependentParty: boolean
}

export interface MembershipStatus {
  statusIsActive: boolean
  statusDescription: string
  statusNotes?: string
  statusId: number
  statusStartDate: Date
}

export interface LatestHouseMembership {
  membershipFrom: string
  membershipFromId: number
  house: number
  membershipStartDate: Date
  membershipEndDate?: string
  membershipEndReason?: string
  membershipEndReasonNotes?: string
  membershipEndReasonId?: string
  membershipStatus: MembershipStatus
}

export interface Value {
  id: number
  nameListAs: string
  nameDisplayAs: string
  nameFullTitle: string
  nameAddressAs: string
  latestParty: LatestParty
  gender: string
  latestHouseMembership: LatestHouseMembership
  thumbnailUrl: string
}

export interface Link {
  rel: string
  href: string
  method: string
}

export interface Item {
  value: Value
  links: Link[]
}

export interface Link2 {
  rel: string
  href: string
  method: string
}

export interface Members {
  items: Item[]
  totalResults: number
  resultContext: string
  skip: number
  take: number
  links: Link2[]
}
