import { SETUP_STEPS } from "../data/setupSteps";

export function FirstProjectTab() {
  return (
    <div>
      <h2 className="section-title">My first project</h2>
      <p className="section-desc">Everything you need to go from zero to a running project on your machine.</p>

      <div className="steps-list">
        {SETUP_STEPS.map((step, i) => (
          <div className="step" key={step.title}>
            <span className="step-num">{i + 1}</span>
            <div className="step-body">
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
              {step.code && <code className="step-code">{step.code}</code>}
              <a className="listen-link" href={step.href} target="_blank" rel="noopener noreferrer">
                {step.linkText} ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
