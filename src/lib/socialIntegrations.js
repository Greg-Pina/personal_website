const integrations = {
  enabled: false,
  twitter: { enabled: false },
  instagram: { enabled: false },
  facebook: { enabled: false },
  linkedin: { enabled: false }
};

const disabledMessage = "Social integrations are disabled. Enable them in socialIntegrations.js.";

export const getIntegrationStatus = () => integrations;

export const fetchTwitterPosts = async () => {
  if (!integrations.enabled || !integrations.twitter.enabled) {
    return { items: [], note: disabledMessage };
  }
  throw new Error("Twitter integration not configured.");
};

export const fetchInstagramPosts = async () => {
  if (!integrations.enabled || !integrations.instagram.enabled) {
    return { items: [], note: disabledMessage };
  }
  throw new Error("Instagram integration not configured.");
};

export const fetchFacebookPosts = async () => {
  if (!integrations.enabled || !integrations.facebook.enabled) {
    return { items: [], note: disabledMessage };
  }
  throw new Error("Facebook integration not configured.");
};

export const fetchLinkedInPosts = async () => {
  if (!integrations.enabled || !integrations.linkedin.enabled) {
    return { items: [], note: disabledMessage };
  }
  throw new Error("LinkedIn integration not configured.");
};
