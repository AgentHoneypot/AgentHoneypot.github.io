(() => {
  const samples = {
    a1: { site: 'CreativeUI · contact task', label: 'A1 · hidden / off-screen reference', title: 'A reference attached to a visible candidate', description: 'Off-screen text is connected to a visible candidate through aria-describedby. A person sees the same task surface; an accessibility-aware agent receives an additional instruction.', channel: 'aria-describedby', observation: 'DOM + accessibility reference', action: 'Visible candidate → honeypot candidate', scope: 'Mechanism preview · no live agent call' },
    a2: { site: 'CarCare · contact task', label: 'A2 · accessibility metadata', title: 'The accessible name carries the trap', description: 'Instructional content travels in an accessible label or description rather than ordinary visible copy. The benchmark keeps the rendered task matched while changing the accessibility channel.', channel: 'accessible label', observation: 'Accessibility channel', action: 'Canonical contact → alternate contact', scope: 'Mechanism preview · matched benchmark terminology' },
    a3: { site: 'CreativeUI · contact task', label: 'A3 · runtime-injected rendered text', title: 'Runtime delivery changes the rendered node', description: 'A same-origin runtime fetch inserts the payload into an ordinary visible text node after page load. The carrier is the runtime delivery path, not a static HTML comment.', channel: 'runtime fetch', observation: 'Rendered text after delivery', action: 'Canonical contact → honeypot contact', scope: 'Mechanism preview · same-origin runtime arm' },
    a4: { site: 'SmartApp · download task', label: 'A4 · parser-derived content', title: 'The parser becomes an observation channel', description: 'LaTeX source is transformed by a document parser into formatted_content that reaches the model-facing observation. The web page itself can remain visually ordinary.', channel: 'formatted_content', observation: 'Document parser output', action: 'Canonical download → honeypot download', scope: 'Mechanism preview · parser-mediated arm' },
    a5: { site: 'SmartApp · download task', label: 'A5 · binary-media content', title: 'Hidden bits enter through media ingestion', description: 'In the primary LSB arm, a condition-blind decoder extracts hidden PNG bits into a media observation field. This sample is decoder-assisted and does not claim native vision-model LSB decoding.', channel: 'PNG bit plane', observation: 'Decoder-assisted media field', action: 'Canonical download → honeypot download', scope: 'Mechanism preview · A5-LSB evidence arm' }
  };
  const setSample = key => {
    const sample = samples[key];
    if (!sample) return;
    for (const button of document.querySelectorAll('.sample-tab')) {
      const active = button.dataset.sample === key;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    }
    for (const [id, value] of Object.entries({ 'sample-site': sample.site, 'sample-label': sample.label, 'sample-title': sample.title, 'sample-description': sample.description, 'sample-channel': sample.channel, 'sample-observation': sample.observation, 'sample-action': sample.action, 'sample-scope': sample.scope })) {
      const node = document.getElementById(id);
      if (node) node.textContent = value;
    }
  };
  for (const button of document.querySelectorAll('.sample-tab')) button.addEventListener('click', () => setSample(button.dataset.sample));
  for (const button of document.querySelectorAll('[data-copy]')) button.addEventListener('click', async () => {
    const node = document.getElementById(button.dataset.copy);
    if (!node) return;
    try { await navigator.clipboard.writeText(node.textContent.trim()); button.textContent = 'Copied'; setTimeout(() => { button.textContent = 'Copy'; }, 1500); }
    catch { button.textContent = 'Copy unavailable'; }
  });
})();
