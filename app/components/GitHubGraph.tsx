"use client"

import React from 'react';
import Image from 'next/image';

export function GitHubGraph() {
  return (
    <section id="github-graph" className="panel" data-reveal>
      <div className="panel-head">
        <p className="label">github commit graph</p>
        <a className="panel-link projects-cta" href="https://github.com/jufa" target="_blank" rel="noopener noreferrer">
          open github ↗
        </a>
      </div>
      <div className="graph-frame">
        <img
          src="https://ghchart.rshah.org/ededed/jufa"
          alt="GitHub contribution heatmap for jufa"
          loading="lazy"
          decoding="async"
          width={900}
          height={200}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    </section>
  );
}
