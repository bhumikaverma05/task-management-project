import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password || !confirm) {
      setError('Please fill out all fields');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await auth.signup({ name, email, password });
      navigate('/dashboard');
    } catch (err) {
      setError(err?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-white p-6" style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh'}}>
      <div className="w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2" style={{width:'100%',maxWidth:980,display:'grid',gridTemplateColumns:'1fr 1fr',borderRadius:24,overflow:'hidden',boxShadow:'0 20px 40px rgba(2,6,23,0.12)'}}>
        <div className="hidden md:flex relative flex-col justify-center items-start gap-6 p-10 text-white" style={{background:'linear-gradient(135deg,var(--accent) 0%, var(--accent-3) 50%, #0f172a 100%)'}}>
          <div className="flex items-center gap-3 z-10">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-lg font-bold">TM</div>
            <div className="text-white font-extrabold text-lg">Task Manager</div>
          </div>
          <h3 className="text-4xl font-extrabold leading-tight z-10">Create an account</h3>
          <p className="text-slate-300 max-w-sm z-10">Start organizing tasks and collaborating with your team.</p>

          <div className="mt-4 w-full max-w-xs rounded-lg p-6 z-10" style={{background:'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',backdropFilter:'blur(6px)'}}>
            <div className="h-40 rounded-md flex items-center justify-center text-4xl" style={{background:'linear-gradient(135deg,var(--accent-2), var(--accent))'}}>🎯</div>
          </div>

          <div className="absolute -right-20 -bottom-10 w-72 h-72 rounded-full blur-3xl" style={{background:'radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), rgba(6,182,212,0.06))'}} />
        </div>

        <div className="p-8 md:p-12 flex items-center justify-center bg-white md:bg-transparent" style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'32px'}}>
          <div className="w-full max-w-md bg-white md:bg-slate-800/90 md:backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg md:shadow-2xl text-slate-900 md:text-white" style={{width:'100%',maxWidth:420,background:'#ffffff',borderRadius:18,padding:24,boxShadow:'0 12px 40px rgba(2,6,23,0.12)'}}>
            <h2 className="text-2xl font-extrabold mb-1">Create account</h2>
            <p className="text-sm text-slate-500 md:text-slate-300 mb-6">Use your email to register and start managing tasks.</p>

            <form className="space-y-4" onSubmit={handleSubmit} aria-describedby={error ? 'signup-error' : undefined}>
              {error && <div id="signup-error" className="text-red-500 font-semibold" role="alert">{error}</div>}

              <div>
                <label htmlFor="signup-name" className="block text-sm font-medium">Full name</label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:text-slate-300"><User size={18} /></span>
                  <input id="signup-name" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 md:border-transparent bg-white md:bg-slate-700 text-slate-900 md:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" aria-required="true" style={{width:'100%',padding:'12px 14px',paddingLeft:40,borderRadius:12,border:'1px solid rgba(139,92,246,0.12)',background:'#fff'}} />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium">Email</label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:text-slate-300"><Mail size={18} /></span>
                  <input id="signup-email" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 md:border-transparent bg-white md:bg-slate-700 text-slate-900 md:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" aria-required="true" style={{width:'100%',padding:'12px 14px',paddingLeft:40,borderRadius:12,border:'1px solid rgba(139,92,246,0.12)',background:'#fff'}} />
                </div>
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium">Password</label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 md:text-slate-300"><Lock size={18} /></span>
                  <input id="signup-password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 md:border-transparent bg-white md:bg-slate-700 text-slate-900 md:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Create a password" aria-required="true" style={{width:'100%',padding:'12px 14px',paddingLeft:40,borderRadius:12,border:'1px solid rgba(139,92,246,0.12)',background:'#fff'}} />
                </div>
              </div>

              <div>
                <label htmlFor="signup-confirm" className="block text-sm font-medium">Confirm password</label>
                <input id="signup-confirm" className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 md:border-transparent bg-white md:bg-slate-700 text-slate-900 md:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 transition" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Repeat password" aria-required="true" style={{width:'100%',padding:'12px 14px',borderRadius:12,border:'1px solid rgba(139,92,246,0.12)',background:'#fff'}} />
              </div>

              <button type="submit" className="w-full py-3 rounded-xl font-extrabold text-white bg-gradient-to-r from-violet-600 to-indigo-500 hover:from-violet-700 hover:to-indigo-600 shadow" disabled={loading} style={{width:'100%',padding:'12px',borderRadius:12,background:'linear-gradient(90deg,var(--accent-2), var(--accent), #4f46e5)',color:'#fff',fontWeight:700,border:'none'}}>{loading ? 'Creating…' : 'Create account'}</button>
            </form>

            <div className="text-sm text-slate-500 md:text-slate-300 mt-5 text-center">Already have an account? <Link to="/login" className="text-violet-400 font-semibold">Sign in</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
