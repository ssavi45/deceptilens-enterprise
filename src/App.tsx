import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Database, Settings, Rocket, CheckCircle2, XCircle, FileVideo, Crosshair, UserCheck, X } from 'lucide-react';
import { AnimatedSphere } from './AnimatedSphere';
import './index.css';

function App() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/deceptilens@enterprise.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="grid-background" />
      
      <div className="container">
        <header>
          <div className="logo">
            DeceptiLens <span>ENTERPRISE</span>
          </div>
          <nav className="desktop-nav">
            <a href="#features">Features</a>
            <a href="#comparison">Why Us</a>
            <a href="#onboarding">Deploy</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="nav-actions">
            <button className="btn btn-primary" onClick={() => setContactModalOpen(true)}>Contact</button>
          </div>
        </header>

        <main>
          {/* HERO SECTION */}
          <section className="hero" style={{ position: 'relative', overflow: 'visible' }}>
            
            {/* RIGHT SIDE SPHERE (Absolutely positioned) */}
            <div className="hero-visual" style={{ position: 'absolute', top: '-5%', right: '-10%', width: '800px', height: '800px', minWidth: '800px', minHeight: '800px', maxWidth: 'none', opacity: 0.4, zIndex: 0, pointerEvents: 'none' }}>
              <AnimatedSphere />
            </div>

            <div className="hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: '850px' }}>
              <div className="hero-label">Explainable AI for Video Analysis</div>
              <h1>Explainable Deception-Risk<br />Intelligence for High-Stakes&nbsp;Video<br />Review</h1>
              <p>
                Upload interview, trial, or statement videos and receive an AI-assisted deception-risk report with model confidence, per-model probabilities, and transparent feature-level explanations.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => setContactModalOpen(true)}>
                  Start Creating <ArrowRight size={16} />
                </button>
                <a href="https://deceptilens.streamlit.app/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Watch Demo
                </a>
              </div>
            </div>
            
            {/* STATS GRID */}
            <div className="stats-grid" style={{ position: 'relative', zIndex: 1, marginTop: '4rem', maxWidth: '1000px' }}>
              <div className="stat-item">
                <div className="stat-value">81.27%</div>
                <div className="stat-label">Mean 10-fold validation accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">650</div>
                <div className="stat-label">Multimodal feature dimensions</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">4</div>
                <div className="stat-label">Model ensemble decision stack</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">&lt;60s</div>
                <div className="stat-label">CPU-based inference time</div>
              </div>
            </div>

            <p style={{ position: 'relative', zIndex: 1, fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2rem', fontStyle: 'italic', textAlign: 'left' }}>
              DeceptiLens is a decision-support system. Final decisions should remain with trained human reviewers.
            </p>
          </section>

          {/* FEATURES SECTION */}
          <section id="features" className="content-section">
            <div className="section-header">
              <h2>Upload. Analyze. Explain.</h2>
              <p>Core capabilities bridging the gap between advanced ML and human review.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <FileVideo size={32} className="feature-icon" />
                <h3>Video-Based Deception-Risk Scoring</h3>
                <p>Upload standard MP4 interview, statement, or trial clips. DeceptiLens analyzes visual, facial, and acoustic behavioral signals to generate a structured deception-risk assessment.</p>
              </div>
              <div className="feature-card">
                <Crosshair size={32} className="feature-icon" />
                <h3>Explainable AI Reports</h3>
                <p>Each prediction includes confidence scores, model-level outputs, and feature-level explanations to accurately understand why a clip was flagged.</p>
              </div>
              <div className="feature-card">
                <Settings size={32} className="feature-icon" />
                <h3>Multimodal Behavioral Features</h3>
                <p>The system combines ResNet-18 visual embeddings, MediaPipe facial blendshapes, and Librosa audio descriptors into a 650-dimensional feature representation.</p>
              </div>
              <div className="feature-card">
                <Database size={32} className="feature-icon" />
                <h3>Four-Model Ensemble</h3>
                <p>The decision stack combines Dual-Stream NN, SVM, Random Forest, and Histogram Gradient Boosting for more robust clip-level analysis.</p>
              </div>
              <div className="feature-card">
                <UserCheck size={32} className="feature-icon" />
                <h3>Human-in-the-Loop Review</h3>
                <p>DeceptiLens supports analysts, investigators, and interviewers. It does not replace professional judgment or legal decision-making.</p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={32} className="feature-icon" />
                <h3>Deployment-Ready Dashboard</h3>
                <p>A well-designed dashboard allows users to upload videos, run inference, view explanations, and export risk assessment reports.</p>
              </div>
            </div>
          </section>

          {/* COMPARISON SECTION */}
          <section id="comparison" className="content-section alternate-bg">
            <div className="section-header">
              <h2>Why DeceptiLens Matters</h2>
              <p>The Problem With Traditional Lie Detection</p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Traditional credibility assessment methods face major trust and scalability challenges. Human deception detection is often only slightly better than chance, and polygraph testing is intrusive, expensive, and controversial.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                <strong>Why Video-Based Review Helps:</strong> Video-based analysis is non-contact, scalable, and easier to integrate into existing review workflows. Instead of attaching sensors to the subject, DeceptiLens analyzes facial, visual, and acoustic patterns already present in recorded video.
              </p>
            </div>

            <div className="comparison-table">
              <div className="comp-col comp-polygraph">
                <div className="comp-header">Traditional Methods</div>
                <ul className="comp-list">
                  <li><XCircle size={18} className="icon-bad" /> Intrusive, expensive, and controversial</li>
                  <li><XCircle size={18} className="icon-bad" /> Alters baseline via induced stress</li>
                  <li><XCircle size={18} className="icon-bad" /> Relies heavily on human examiner interpretation</li>
                  <li><XCircle size={18} className="icon-bad" /> Extremely slow processing</li>
                  <li><XCircle size={18} className="icon-bad" /> Hard to scale globally</li>
                </ul>
              </div>
              <div className="comp-col comp-deceptilens">
                <div className="comp-header">DeceptiLens AI</div>
                <ul className="comp-list">
                  <li><CheckCircle2 size={18} className="icon-good" /> Non-contact video-based analysis</li>
                  <li><CheckCircle2 size={18} className="icon-good" /> Explainable model outputs</li>
                  <li><CheckCircle2 size={18} className="icon-good" /> Multimodal signal fusion</li>
                  <li><CheckCircle2 size={18} className="icon-good" /> Fast clip-level review</li>
                  <li><CheckCircle2 size={18} className="icon-good" /> Human-in-the-loop decision support</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '4rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 500 }}>2.8B</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Video statements globally</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 500 }}>89%</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Need faster review</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              DeceptiLens is not a magic lie detector. It is an explainable deception-risk intelligence platform for structured video review.
            </div>
          </section>

          {/* INTERACTIVE ONBOARDING WIZARD */}
          <WizardSection />

          {/* PRICING SECTION */}
          <section id="pricing" className="content-section">
            <div className="section-header">
              <h2>Enterprise Licensing</h2>
              <p>Flexible deployment options tailored to your operational requirements.</p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Proof of Concept</h3>
                <div className="price">Pilot</div>
                <p className="price-desc">Low-risk validation for your specific operational environment.</p>
                <ul className="pricing-features">
                  <li>30-day trial period</li>
                  <li>Basic model fine-tuning</li>
                  <li>Standard cross-domain evaluation</li>
                  <li>Performance validation report</li>
                </ul>
                <button className="btn btn-outline w-full mt-auto" onClick={() => setContactModalOpen(true)}>Request Custom Model</button>
              </div>
              <div className="pricing-card">
                <h3>Perpetual License</h3>
                <div className="price">One-Time</div>
                <p className="price-desc">Outright ownership of your specialized behavioral model.</p>
                <ul className="pricing-features">
                  <li>Deep custom model fine-tuning</li>
                  <li>On-premise deployment package</li>
                  <li>Full data sovereignty</li>
                  <li>Lifetime local inference usage</li>
                </ul>
                <button className="btn btn-outline w-full mt-auto" onClick={() => setContactModalOpen(true)}>Request Custom Model</button>
              </div>
              <div className="pricing-card popular">
                <div className="popular-badge">Comprehensive</div>
                <h3>Managed Enterprise</h3>
                <div className="price">License + SLA</div>
                <p className="price-desc">Turnkey solution with continuous model optimization and support.</p>
                <ul className="pricing-features">
                  <li>Everything in Perpetual License</li>
                  <li>Monthly maintenance & monitoring</li>
                  <li>Quarterly model retraining updates</li>
                  <li>24/7 dedicated engineering SLA</li>
                </ul>
                <button className="btn btn-primary w-full mt-auto" onClick={() => setContactModalOpen(true)}>Request Custom Model</button>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="logo" style={{ marginBottom: '1rem' }}>
            DeceptiLens <span>ENTERPRISE</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            © 2026 DeceptiLens. Democratizing behavioral analysis.
          </p>
        </footer>
      </div>

      {/* CONTACT MODAL */}
      <div className={`modal-overlay ${isContactModalOpen ? 'open' : ''}`} onClick={() => { setContactModalOpen(false); setIsSubmitted(false); }}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => { setContactModalOpen(false); setIsSubmitted(false); }}>
            <X size={24} />
          </button>
          
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div className="step-icon success" style={{ margin: '0 auto 1.5rem', background: '#d1fae5', color: 'var(--success-color)' }}>
                <CheckCircle2 size={32} />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>Inquiry Received</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                Your details have been successfully transmitted. The DeceptiLens Enterprise team will review your requirements and get back to you shortly to schedule a technical consultation.
              </p>
              <button className="btn btn-primary" onClick={() => { setContactModalOpen(false); setIsSubmitted(false); }} style={{ marginTop: '2.5rem' }}>
                Close Window
              </button>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Organize a Meeting</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Fill out the form below and our enterprise team will reach out to schedule a technical consultation.
              </p>

              <form onSubmit={handleContactSubmit} className="form-group" style={{ marginBottom: 0 }}>
                {/* FormSubmit Configuration (Hidden fields) */}
                <input type="hidden" name="_subject" value="New DeceptiLens Enterprise Inquiry!" />
                <input type="hidden" name="_template" value="table" />
                
                <input type="text" name="name" className="form-input" placeholder="Full Name" required />
                <input type="email" name="email" className="form-input" placeholder="Work Email" required />
                <input type="text" name="company" className="form-input" placeholder="Company / Organization" required />
                
                <select name="service_type" className="form-input" required defaultValue="">
                  <option value="" disabled>Primary Use Case</option>
                  <option value="Law Enforcement">Law Enforcement / Interrogation</option>
                  <option value="HR Screening">HR / Recruitment Screening</option>
                  <option value="Insurance Audit">Insurance Fraud Auditing</option>
                  <option value="Intelligence">Intelligence / Security</option>
                  <option value="Other">Other</option>
                </select>

                <textarea 
                  name="message" 
                  className="form-input" 
                  placeholder="Tell us a bit about your operational environment and video volume..." 
                  rows={4} 
                  style={{ resize: 'vertical' }}
                  required
                ></textarea>
                
                <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%', marginTop: '1rem', padding: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
                  {isSubmitting ? 'Sending...' : 'Request Meeting'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// -------------------------------------------------------------
// Interactive Wizard Component (Hybrid Dark Layout)
// -------------------------------------------------------------
function WizardSection() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  // Simulate fine-tuning progress
  useEffect(() => {
    if (step === 3) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setStep(4), 500);
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <section id="onboarding" className="dark-section">
      <div className="dark-container">
        <div className="section-label">Deployment Process</div>
        <h2>Deploy Custom Deception Models in 4 Steps</h2>

        <div className="dark-grid">
          {/* LEFT COLUMN: Clickable Steps */}
          <div className="steps-list">
            <div className={`step-item ${step === 1 ? 'active' : ''}`} onClick={() => setStep(1)}>
              <span className="step-number">I</span>
              <h3>Consultation</h3>
              <p>We begin by understanding your use case, risk level, video environment, data privacy needs, and review workflow.</p>
            </div>
            <div className={`step-item ${step === 2 ? 'active' : ''}`} onClick={() => setStep(2)}>
              <span className="step-number">II</span>
              <h3>Data Collection</h3>
              <p>You provide representative video clips from your environment, such as interviews, trial statements, compliance recordings, or controlled research videos.</p>
            </div>
            <div className={`step-item ${step === 3 ? 'active' : ''}`} onClick={() => setStep(3)}>
              <span className="step-number">III</span>
              <h3>Fine-Tuning</h3>
              <p>Our team adapts the multimodal pipeline to your lighting, camera angle, audio quality, language context, clip duration, and behavioral distribution.</p>
            </div>
            <div className={`step-item ${step === 4 ? 'active' : ''}`} onClick={() => setStep(4)}>
              <span className="step-number">IV</span>
              <h3>Deployment</h3>
              <p>You receive a secure dashboard, private cloud deployment, API integration, or an air-gapped container depending on your organization's needs.</p>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Dashboard Window */}
          <div className="code-window">
            <div className="code-header">
              <div className="window-controls">
                <div className="control-dot" />
                <div className="control-dot" />
                <div className="control-dot" />
              </div>
              <div>deployment_wizard.tsx</div>
            </div>
            
            <div className="code-body">
              {/* Step 1: Consultation */}
              {step === 1 && (
                <div className="wizard-step-inner animate-in">
                  <div className="step-icon"><ShieldCheck size={32} /></div>
                  <h3>Initial Consultation</h3>
                  <p>Tell us about your organization and deployment environment.</p>
                  <div className="dark-form-group">
                    <input type="text" placeholder="Company Name" className="dark-input" />
                    <input type="text" placeholder="Contact Email" className="dark-input" />
                    <select className="dark-input">
                      <option value="">Select Service Type</option>
                      <option value="law">Law Enforcement / Interrogation</option>
                      <option value="hr">HR / Recruitment Screening</option>
                      <option value="insurance">Insurance Fraud Auditing</option>
                      <option value="intelligence">Intelligence / Security</option>
                    </select>
                  </div>
                  <button className="btn dark-btn-primary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => setStep(2)}>Submit & Continue</button>
                </div>
              )}

              {/* Step 2: Data Collection */}
              {step === 2 && (
                <div className="wizard-step-inner animate-in">
                  <div className="step-icon"><Database size={32} /></div>
                  <h3>Provide Domain Dataset</h3>
                  <p>Upload a small calibration dataset for cross-domain accuracy.</p>
                  <div className="dark-info-box" style={{ textAlign: 'left' }}>
                    <strong style={{ color: 'white' }}>Requirements:</strong>
                    <ul>
                      <li>20 to 50 short video clips</li>
                      <li>Recorded in your operational setting</li>
                      <li>Ground-truth labels (Truth/Deception)</li>
                    </ul>
                  </div>
                  <div className="dark-form-group" style={{ marginTop: '1.5rem' }}>
                    <button className="btn dark-btn-outline" style={{ borderStyle: 'dashed', padding: '1.5rem' }}>
                      Click to securely upload .zip archive
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button className="btn dark-btn-outline" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                    <button className="btn dark-btn-primary" style={{ flex: 2 }} onClick={() => setStep(3)}>Upload & Tune</button>
                  </div>
                </div>
              )}

              {/* Step 3: Fine-Tuning */}
              {step === 3 && (
                <div className="wizard-step-inner animate-in">
                  <div className="step-icon spinning"><Settings size={32} /></div>
                  <h3>Fine-Tuning Model</h3>
                  <p>Adapting the dual-stream multimodal pipeline...</p>
                  
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="progress-text">Optimizing heterogeneous ensemble... {progress}%</p>
                </div>
              )}

              {/* Step 4: Deployment */}
              {step === 4 && (
                <div className="wizard-step-inner animate-in">
                  <div className="step-icon success"><Rocket size={32} /></div>
                  <h3>Ready for Deployment</h3>
                  <p>Your specialized DeceptiLens model is ready.</p>
                  
                  <div className="api-key-box">
                    <div className="api-label">Your Custom Endpoint API Key:</div>
                    <code className="api-key">dk_live_custom_x89f2ma...</code>
                  </div>
                  
                  <button className="btn dark-btn-primary" onClick={() => setStep(1)} style={{ marginTop: '2rem', width: '100%' }}>
                    Reset Demo
                  </button>
                </div>
              )}
            </div>
            
            <div className="code-footer">
              Ready - Step {step} of 4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
