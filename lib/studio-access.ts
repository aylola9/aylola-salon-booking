import { getChatGPTUser } from '@/app/chatgpt-auth';

// The Site owner's stable user ID, supplied by the hosting platform after sign-in.
const STUDIO_OWNER_ID = '51b7cb6b-23c1-4af6-b7f5-645229c15933';

export async function canAccessStudio() {
  const user = await getChatGPTUser();
  return user?.userId === STUDIO_OWNER_ID;
}
