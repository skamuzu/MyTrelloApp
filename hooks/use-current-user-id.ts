"use client"

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export const useCurrentUserId = () => {
  const [id, setId] = useState<string>()

  useEffect(() => {
    const fetchUserId = async () => {
      const { data, error } = await createClient().auth.getUser()
      if (error) {
        console.error(error)
      }

      setId(data.user?.id)
    }
    fetchUserId()
  }, [])

  return id
}
