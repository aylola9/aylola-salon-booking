import {Header,Footer,Banner} from '@/components/site-shell';
import {chatGPTSignInPath} from '@/app/chatgpt-auth';
import {canAccessStudio} from '../../lib/studio-access';import Dashboard from './dashboard';

export const dynamic = 'force-dynamic';

export default async function Manage(){
  const allowed = await canAccessStudio();
  return <><Header/><Banner eyebrow="Studio workspace" title="Appointments & clients" description="Track upcoming visits and keep helpful notes for returning clients."/><main className="section wrap">{allowed?<Dashboard/>:<div className="panel" style={{maxWidth:640,margin:'0 auto'}}><h2 className="serif">Studio access</h2><p>Appointments and client details are available to the salon owner.</p><a className="btn" href={chatGPTSignInPath('/manage')} target="_top">Owner sign in</a></div>}</main><Footer/></>;
}
