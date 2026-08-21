const links = {
  paper: "https://arxiv.org/abs/2607.17250",
  code: "https://github.com/HKUST-KnowComp/EvolvingWorld",
  data: "https://huggingface.co/datasets/zongqing0068/EvolvingWorld",
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="EvolvingWorld home">
          <span className="mark">EW</span>
          <span>EvolvingWorld</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#method">Method</a>
          <a href="#demo">Demo</a>
          <a href="#results">Results</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="venue-pill"><span /> EMNLP 2026</div>
        <h1>Literary worlds<br />that <em>remember</em> and evolve.</h1>
        <p className="lede">
          An open-schema framework where Character Agents and a World Model
          co-evolve through interaction—scene after scene.
        </p>
        <div className="actions">
          <a className="button primary" href={links.paper}>Read the paper <ArrowIcon /></a>
          <a className="button" href={links.code}>View code <ArrowIcon /></a>
          <a className="button" href={links.data}>Get data <ArrowIcon /></a>
        </div>
        <p className="authors">Qing Zong · Yue Guo · Mengxin Yang · Yiwen Guo · Yangqiu Song</p>

        <div className="world-stage" aria-label="Character and world co-evolution illustration">
          <div className="stage-label">Persistent co-evolution</div>
          <article className="agent-node character-node">
            <span className="node-index">01</span>
            <small>Character Agent</small>
            <strong>Profiles, motivations<br />&amp; interactions</strong>
          </article>
          <div className="exchange">
            <span>actions reshape the world</span>
            <div className="exchange-lines"><i /><i /></div>
            <span>world changes shape characters</span>
          </div>
          <article className="agent-node world-node">
            <span className="node-index">02</span>
            <small>World Model</small>
            <strong>Scenes, locations<br />&amp; persistent state</strong>
          </article>
        </div>
      </section>

      <section className="method-preview shell" id="method">
        <div className="section-kicker">Core design</div>
        <h2>Beyond static personas<br />and passive backdrops.</h2>
        <div className="feature-grid">
          <article><b>01</b><h3>Co-evolution</h3><p>Every interaction can leave a lasting trace on both characters and their world.</p></article>
          <article><b>02</b><h3>Open schema</h3><p>Book-specific dimensions adapt automatically across radically different literary worlds.</p></article>
          <article><b>03</b><h3>Hidden tracker</h3><p>Weak evidence accumulates before slower traits evolve, enabling multiple timescales.</p></article>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell manifesto-grid">
          <div className="section-kicker">The motivation</div>
          <p className="manifesto-copy">
            A believable interactive world is more than a cast of convincing
            personas. Interactions should reshape characters, locations,
            entities, and even the world setting—and those changes should
            persist into what happens next.
          </p>
          <div className="manifesto-aside">
            <span>Built for</span>
            <p>Interactive fiction · AI teammates · Open-world games</p>
          </div>
        </div>
      </section>

      <section className="demo-section shell" id="demo">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Demo</div>
            <h2>Watch a world<br />continue to unfold.</h2>
          </div>
          <p>
            Starting from a literary snapshot, EvolvingWorld plans scenes,
            generates multi-character interactions, and updates persistent
            character and world states along the trajectory.
          </p>
        </div>
        <div className="video-frame">
          <video controls playsInline preload="metadata" poster="./demo-poster.jpg">
            <source src="./evolvingworld-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <div className="video-caption"><span>Demo film</span><span>02:25</span></div>
        </div>
      </section>

      <section className="pipeline-section" id="pipeline">
        <div className="shell">
          <div className="section-heading compact">
            <div>
              <div className="section-kicker">Framework</div>
              <h2>From books to<br />evolving worlds.</h2>
            </div>
            <p>
              Seven trainable tasks connect literary data extraction, scene
              planning, interaction generation, and persistent state updates.
            </p>
          </div>
          <figure className="pipeline-figure">
            <img src="./pipeline.png" alt="The EvolvingWorld data, training, co-evolution simulation, and evaluation pipeline" />
            <figcaption>Overview of the EvolvingWorld framework and benchmark.</figcaption>
          </figure>
        </div>
      </section>

      <section className="results shell" id="results">
        <div className="section-heading compact">
          <div>
            <div className="section-kicker">Evidence</div>
            <h2>Data that teaches<br />world evolution.</h2>
          </div>
          <p>
            Book-to-world supervision consistently improves both Character
            Agents and World Models across model families, scales, and unseen books.
          </p>
        </div>

        <div className="stat-grid">
          <article><strong>57</strong><span>literary books</span></article>
          <article><strong>138,596</strong><span>training samples</span></article>
          <article><strong>222</strong><span>ID / OOD test snapshots</span></article>
          <article><strong>20</strong><span>trajectory-level metrics</span></article>
        </div>

        <div className="result-callout">
          <div className="result-main">
            <small>World Model · Average score</small>
            <strong>59.87</strong>
            <p>
              The EvolvingWorld-trained 32B Qwen model surpasses
              Claude-4.6-Sonnet and Gemini-2.5-Flash on World Model evaluation.
            </p>
          </div>
          <div className="result-bars" aria-label="World Model average score comparison">
            <div><span>Qwen 32B + EW</span><i style={{ width: "100%" }} /><b>59.87</b></div>
            <div><span>Gemini 2.5 Flash</span><i style={{ width: "99.8%" }} /><b>59.76</b></div>
            <div><span>Claude 4.6 Sonnet</span><i style={{ width: "96.1%" }} /><b>57.54</b></div>
          </div>
        </div>

        <div className="finding-grid">
          <article>
            <span>01 / Data</span>
            <h3>Effective across scales</h3>
            <p>Training gains hold across Qwen and Llama backbones, including out-of-distribution books.</p>
          </article>
          <article>
            <span>02 / Framework</span>
            <h3>Both modules matter</h3>
            <p>Ablations show character updates and world updates support distinct—and coupled—parts of evolution.</p>
          </article>
          <article>
            <span>03 / Long horizon</span>
            <h3>Less degradation</h3>
            <p>Co-evolving structured states mitigate profile drift and scene-continuity decay over longer trajectories.</p>
          </article>
        </div>
      </section>

      <section className="applications">
        <div className="shell applications-inner">
          <div className="section-kicker">Looking forward</div>
          <h2>Worlds that respond.<br />Characters that grow.</h2>
          <p>
            A foundation for interactive literary worlds, persistent AI
            teammates, and open-world experiences that evolve with every interaction.
          </p>
          <div className="actions">
            <a className="button light" href={links.paper}>Paper <ArrowIcon /></a>
            <a className="button light" href={links.code}>GitHub <ArrowIcon /></a>
            <a className="button light" href={links.data}>Dataset <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="citation shell" id="citation">
        <div>
          <div className="section-kicker">Citation</div>
          <h2>Build on<br />EvolvingWorld.</h2>
        </div>
        <pre>{`@article{zong2026evolvingworld,
  title={EvolvingWorld: An Open-Schema Framework for
    Co-Evolving Role-Play Agents and World Model in
    Interactive Literary World},
  author={Zong, Qing and Guo, Yue and Yang, Mengxin and
    Guo, Yiwen and Song, Yangqiu},
  journal={arXiv preprint arXiv:2607.17250},
  year={2026}
}`}</pre>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#top"><span className="mark">EW</span><span>EvolvingWorld</span></a>
        <p>Interactive literary worlds that remember and evolve.</p>
        <a href={links.paper}>arXiv:2607.17250 ↗</a>
      </footer>
    </main>
  );
}
