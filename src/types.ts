import React, { Dispatch, SetStateAction } from "react"

export type Pet = {
  name: string,
  age?: number,
  owner?: string
}

export type Button = {
  buttonText: string,
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>
}