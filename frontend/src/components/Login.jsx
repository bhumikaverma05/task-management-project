import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      await auth.login({ email, password });
      if (!remember) localStorage.removeItem('auth');
      navigate('/dashboard');
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-white p-6" style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2" style={{width:'100%',maxWidth:980,display:'grid',gridTemplateColumns:'1fr 1fr',borderRadius:24,overflow:'hidden',boxShadow:'0 20px 40px rgba(2,6,23,0.12)'}}>
        {/* Left visual */}
        <div className="hidden md:flex relative flex-col justify-center items-start gap-6 p-10 text-white" style={{background:'linear-gradient(135deg,var(--accent) 0%, var(--accent-3) 50%, #0f172a 100%)'}}>
          <div className="flex items-center gap-3 z-10">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-lg font-bold">TM</div>
            <div className="text-white font-extrabold text-lg">Task Manager</div>
          </div>
          <h3 className="text-4xl font-extrabold leading-tight z-10">Welcome back</h3>
          <p className="text-slate-300 max-w-sm z-10">Organize tasks, track progress, and collaborate with your team — all in one place.</p>

          <div className="mt-4 w-full max-w-xs rounded-lg p-6 z-10" style={{background:'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',backdropFilter:'blur(6px)'}}>
            <div className="h-40 rounded-md flex items-center justify-center text-4xl" style={{background:'linear-gradient(135deg,var(--accent-2), var(--accent))'}}>🗂️</div>
          </div>

          {/* decorative circles */}
          <div className="absolute -right-20 -bottom-10 w-72 h-72 rounded-full blur-3xl" style={{background:'radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), rgba(6,182,212,0.06))'}} />
          <div className="absolute -left-16 top-10 w-48 h-48 rounded-full blur-2xl" style={{background:'radial-gradient(circle at 50% 50%, rgba(255,122,182,0.08), rgba(124,58,237,0.04))'}} />
        </div>

        {/* Right form */}
        <div className="p-8 md:p-12 flex items-center justify-center bg-white md:bg-transparent" style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'32px'}}>
          <div className="w-full max-w-md bg-white md:bg-slate-800/90 md:backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg md:shadow-2xl text-slate-900 md:text-white" style={{width:'100%',maxWidth:420,background:'#ffffff',borderRadius:18,padding:24,boxShadow:'0 12px 40px rgba(2,6,23,0.12)'}}>
            <h2 className="text-2xl font-extrabold mb-1">Sign in to your account</h2>
            <p className="text-sm text-slate-500 md:text-slate-300 mb-6">Use your email and password to sign in securely.</p>

            <form className="space-y-4" onSubmit={handleSubmit} aria-describedby={error ? 'login-error' : undefined}>
              {error && <div id="login-error" className="text-red-500 font-semibold" role="alert">{error}</div>}

              <div>
                <label htmlFor="login-email" className="block text-sm font-medium">Email</label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:text-slate-300"><Mail size={18} /></span>
                  <input id="login-email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 md:border-transparent bg-white md:bg-slate-700 text-slate-900 md:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" aria-required="true" style={{width:'100%',padding:'12px 14px',paddingLeft:40,borderRadius:12,border:'1px solid rgba(139,92,246,0.12)',background:'#fff'}} />
                </div>
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm font-medium">Password</label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:text-slate-300"><Lock size={18} /></span>
                  <input id="login-password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 md:border-transparent bg-white md:bg-slate-700 text-slate-900 md:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" aria-required="true" style={{width:'100%',padding:'12px 14px',paddingLeft:40,borderRadius:12,border:'1px solid rgba(139,92,246,0.12)',background:'#fff'}} />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2"><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="w-4 h-4" /> <span className="text-sm">Remember me</span></label>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-violet-500">Forgot?</a>
              </div>

              <button type="submit" className="w-full py-3 rounded-xl font-extrabold text-white bg-gradient-to-r from-violet-600 to-indigo-500 hover:scale-[1.01] transform transition shadow-md" disabled={loading} style={{width:'100%',padding:'12px',borderRadius:12,background:'linear-gradient(90deg,var(--accent-2), var(--accent), #4f46e5)',color:'#fff',fontWeight:700,border:'none'}}>{loading ? 'Signing in…' : 'Sign In'}</button>

              <div className="flex items-center gap-3 mt-2">
                <div className="flex-1 h-px bg-slate-200 md:bg-slate-700" />
                <div className="text-xs text-slate-400">or</div>
                <div className="flex-1 h-px bg-slate-200 md:bg-slate-700" />
              </div>

              <div className="mt-3 flex justify-center">
                <button type="button" className="w-full md:w-3/4 py-2 rounded-xl border border-slate-200 md:border-slate-700 text-sm flex items-center justify-center gap-2 bg-white md:bg-slate-700 text-slate-900 md:text-white" style={{background:'#fff',color:'#111'}}>Continue with Google</button>
              </div>
            </form>

            <div className="text-sm text-slate-500 md:text-slate-300 mt-5 text-center">Don’t have an account? <Link to="/signup" className="text-violet-400 font-semibold">Create one</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
