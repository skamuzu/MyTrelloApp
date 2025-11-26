import { createClient } from "../lib/supabase/client";
import { useState } from "react";

export function useSocialAuth() {
  const [socialError, setSocialError] = useState<string | null>(null);
  const [socialLoading, setSocialLoading] = useState(false);

const handleSocialLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setSocialLoading(true);
    setSocialError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: unknown) {
      setSocialError(error instanceof Error ? error.message : "An error occurred");
      setSocialLoading(false);
    } finally {
      setSocialLoading(false);
    }
  };

  return {
    handleSocialLogin,
    socialError,
    socialLoading,
  };
}