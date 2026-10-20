import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#0f172a' }}>
          Password Policy Analyzer & Security Auditor
        </h1>
        <p style={{ color: '#475569', marginTop: '0.5rem' }}>
          Client-Side Password Evaluation & NIST SP 800-63B Compliance Engine
        </p>
      </header>

      <main>
        <section style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
            Stage 1: System Shell Operational
          </h2>
          <p style={{ color: '#334155' }}>
            Local execution environment active. No network requests are initiated by this application.
          </p>
          <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '0.375rem', fontSize: '0.875rem' }}>
            <strong>Privacy Guarantee:</strong> All password computations take place entirely in browser memory.
          </div>
        </section>
      </main>

      <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', fontSize: '0.875rem', color: '#64748b' }}>
        <p>Cybersecurity Portfolio Project • Client-Side Security Tool</p>
      </footer>
    </div>
  );
}