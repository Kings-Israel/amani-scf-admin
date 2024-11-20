interface AccessGroup {
  id: number
  target_role_id: number
  name: string
}

export interface Group {
  id: number
  name: string
  description: string
  role_type_id: number
  access_groups: AccessGroup[]
}

export interface RoleType {
  id: number
  name: string
  groups: Group[]
}
