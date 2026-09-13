'use client';

import React, { useState } from 'react';
import { Check, Lock, Circle, Play, Share2, ArrowRight, ChevronRight, BookOpen, Clock } from 'lucide-react';

const C = {
  surface: '#0b1326',
  surfaceInset: '#0B1120',
  surfaceCard: '#1E293B',
  surfaceContainerLowest: '#060e20',
  surfaceContainerLow: '#131b2e',
  surfaceContainer: '#171f33',
  surfaceContainerHigh: '#222a3d',
  surfaceContainerHighest: '#2d3449',
  primary: '#68dba9',
  primaryFixed: '#85f8c4',
  primaryContainer: '#25a475',
  onPrimary: '#003825',
  secondary: '#ffb599',
  secondaryContainer: '#f66018',
  tertiary: '#ffb3ae',
  onSurface: '#dae2fd',
  onSurfaceVariant: '#bccac0',
  textHeading: '#F1F5F9',
  textMuted: '#94A3B8',
  outline: '#87948b',
  outlineVariant: '#3d4a42',
};

type NodeStatus = 'done' | 'active' | 'locked' | 'available';

interface RoadmapNode {
  id: number;
  title: string;
  subtitle: string;
  status: NodeStatus;
  duration: string;
  column: 'fundamentals' | 'containers';
  tags: string[];
}

const filterTabs = ['All Topics', 'Core Only', 'In Progress', 'Specializations'];

const roadmapNodes: RoadmapNode[] = [
  { id: 1, title: 'Linux & Shell Fundamentals', subtitle: 'Process model, file system hierarchy, bash scripting', status: 'done', duration: '4h 20m', column: 'fundamentals', tags: ['Core', 'Bash', 'POSIX'] },
  { id: 2, title: 'Networking & DNS Internals', subtitle: 'TCP/IP stack, TLS handshakes, DNS resolution graph', status: 'done', duration: '5h 10m', column: 'fundamentals', tags: ['Core', 'TCP', 'DNS'] },
  { id: 3, title: 'CI/CD Pipeline Architecture', subtitle: 'GitHub Actions, ArgoCD, deployment strategies', status: 'active', duration: '6h 30m', column: 'fundamentals', tags: ['Core', 'CI/CD', 'GitOps'] },
  { id: 4, title: 'Infrastructure as Code (Terraform)', subtitle: 'Provider graph, state management, remote backends', status: 'available', duration: '7h 15m', column: 'fundamentals', tags: ['Advanced', 'HCL', 'AWS'] },
  { id: 5, title: 'Observability & SRE Practices', subtitle: 'SLI/SLO, distributed tracing, alerting architecture', status: 'locked', duration: '8h 00m', column: 'fundamentals', tags: ['SRE', 'Prometheus', 'Grafana'] },
  { id: 6, title: 'Docker & Container Runtimes', subtitle: 'OCI spec, overlay FS, namespaces and cgroups', status: 'done', duration: '5h 45m', column: 'containers', tags: ['Core', 'Docker', 'OCI'] },
  { id: 7, title: 'Kubernetes Core Architecture', subtitle: 'etcd, kube-apiserver, scheduler, controller loop', status: 'active', duration: '9h 00m', column: 'containers', tags: ['Core', 'k8s', 'etcd'] },
  { id: 8, title: 'Service Mesh & Istio', subtitle: 'Envoy proxy, mTLS, traffic policies, observability', status: 'available', duration: '6h 20m', column: 'containers', tags: ['Advanced', 'Istio', 'mTLS'] },
  { id: 9, title: 'Helm & GitOps Delivery', subtitle: 'Chart templating, FluxCD, ArgoCD sync loops', status: 'locked', duration: '4h 50m', column: 'containers', tags: ['GitOps', 'Helm', 'Flux'] },
  { id: 10, title: 'Multi-cloud & Cost Optimization', subtitle: 'FinOps, Spot instances, multi-region architecture', status: 'locked', duration: '5h 30m', column: 'containers', tags: ['Specialization', 'FinOps', 'AWS'] },
];

const statusIcon = (status: NodeStatus) => {
  if (status === 'done') return <Check size={14} style={{ color: C.onPrimary }} />;
  if (status === 'active') return <Play size={14} style={{ color: C.onPrimary }} />;
  if (status === 'locked') return <Lock size={14} style={{ color: C.textMuted }} />;
  return <Circle size={14} style={{ color: C.primary }} />;
};

const statusBg = (status: NodeStatus) => {
  if (status === 'done') return C.primaryContainer;
  if (status === 'active') return C.secondaryContainer;
  if (status === 'locked') return C.surfaceContainerHigh;
  return C.surfaceContainer;
};

const statusBorder = (status: NodeStatus) => {
  if (status === 'done') return C.primary;
  if (status === 'active') return C.secondary;
  if (status === 'locked') return C.outlineVariant;
  return C.outline;
};

interface PageProps {
  params: Promise<{ domain: string }>;
}

export default function RoadmapPage({ params }: PageProps) {
  const [activeFilter, setActiveFilter] = useState('All Topics');
  const [selectedNode, setSelectedNode] = useState<RoadmapNode>(roadmapNodes[2]);

  const fundamentalNodes = roadmapNodes.filter(n => n.column === 'fundamentals');
  const containerNodes = roadmapNodes.filter(n => n.column === 'containers');
  const completedCount = roadmapNodes.filter(n => n.status === 'done').length;

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', backgroundColor: C.surface }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '20px 24px', borderBottom: `1px solid ${C.surfaceContainerHigh}` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginBottom: 6 }}>
              Roadmaps / <span style={{ color: C.primary }}>DevOps & Cloud Engineering</span>
            </div>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 26, fontWeight: 700, color: C.textHeading, margin: '0 0 6px', letterSpacing: '-0.02em' }}>
              DevOps & Cloud Engineering Roadmap
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {/* Segmented progress */}
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  {roadmapNodes.map(n => (
                    <div key={n.id} style={{ width: 16, height: 8, borderRadius: 2, backgroundColor: n.status === 'done' ? C.primary : n.status === 'active' ? C.secondaryContainer : C.surfaceContainerHigh, boxShadow: n.status === 'done' ? '0 0 6px rgba(104,219,169,0.4)' : 'none' }} />
                  ))}
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.primary, fontWeight: 600 }}>{completedCount}/{roadmapNodes.length} completed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 9999, backgroundColor: `${C.primary}1A`, color: C.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.primary, display: 'inline-block' }} />
                Estimated 56h total learning
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 16px', borderRadius: 8, border: `1px solid ${C.surfaceContainerHigh}`, backgroundColor: 'transparent', color: C.onSurface, fontSize: 13, cursor: 'pointer' }}>
              <Share2 size={14} /> Share Roadmap
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 20px', borderRadius: 8, border: 'none', backgroundColor: C.primary, color: C.onPrimary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 0 16px rgba(104,219,169,0.25)' }}>
              <BookOpen size={14} /> Learning Mode
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 4 }}>
          {filterTabs.map(tab => (
            <button key={tab} onClick={() => setActiveFilter(tab)} style={{
              padding: '6px 16px', borderRadius: 8, border: 'none', cursor: 'pointer',
              backgroundColor: activeFilter === tab ? `${C.primary}26` : C.surfaceContainerHigh,
              color: activeFilter === tab ? C.primary : C.textMuted,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500,
              boxShadow: activeFilter === tab ? `0 0 0 1px ${C.primary}66` : 'none',
              transition: 'all 150ms',
            }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN: GRID + DETAIL PANEL ── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 360px', overflow: 'hidden' }}>

        {/* ── LEFT: Roadmap node grid ── */}
        <div style={{ overflow: 'auto', padding: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {/* Fundamentals column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: `${C.primary}26`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.primary }}>
                  <span style={{ fontSize: 14 }}>⚡</span>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: C.textHeading }}>Fundamentals</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginLeft: 'auto' }}>{fundamentalNodes.filter(n => n.status === 'done').length}/{fundamentalNodes.length}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
                {/* Vertical connector line */}
                <div style={{ position: 'absolute', left: 18, top: 36, bottom: 36, width: 2, backgroundColor: C.surfaceContainerHigh, zIndex: 0 }} />
                {fundamentalNodes.map((node, i) => (
                  <div key={node.id}>
                    <div
                      onClick={() => setSelectedNode(node)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderRadius: 12, cursor: 'pointer', position: 'relative', zIndex: 1,
                        backgroundColor: selectedNode?.id === node.id ? `${C.primary}1A` : node.status === 'active' ? `${C.secondary}0D` : 'transparent',
                        border: `1px solid ${selectedNode?.id === node.id ? C.primary : node.status === 'active' ? C.secondary : 'transparent'}`,
                        transition: 'all 150ms',
                        marginBottom: i < fundamentalNodes.length - 1 ? 4 : 0,
                      }}
                    >
                      {/* Status icon */}
                      <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: statusBg(node.status), border: `2px solid ${statusBorder(node.status)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2, boxShadow: node.status === 'done' ? '0 0 12px rgba(104,219,169,0.3)' : node.status === 'active' ? '0 0 12px rgba(246,96,24,0.3)' : 'none' }}>
                        {statusIcon(node.status)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: node.status === 'locked' ? C.textMuted : C.textHeading, margin: 0, lineHeight: 1.3 }}>{node.title}</h3>
                          {node.status === 'active' && <span style={{ padding: '1px 6px', borderRadius: 4, backgroundColor: `${C.secondary}26`, color: C.secondary, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600 }}>IN PROGRESS</span>}
                        </div>
                        <p style={{ fontSize: 12, color: C.textMuted, margin: '0 0 6px', lineHeight: 1.5 }}>{node.subtitle}</p>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: C.outline }}>
                            <Clock size={11} /> {node.duration}
                          </div>
                          {node.tags.slice(0, 2).map(tag => (
                            <span key={tag} style={{ padding: '1px 6px', borderRadius: 4, backgroundColor: C.surfaceContainerHigh, color: C.textMuted, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Connector dot between nodes */}
                    {i < fundamentalNodes.length - 1 && (
                      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 22, height: 12, position: 'relative', zIndex: 1 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.surfaceContainerHighest, border: `1px solid ${C.outlineVariant}`, marginTop: 3 }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Containers column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: `${C.secondary}26`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.secondary }}>
                  <span style={{ fontSize: 14 }}>📦</span>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 700, color: C.textHeading }}>Containers & Orchestration</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.textMuted, marginLeft: 'auto' }}>{containerNodes.filter(n => n.status === 'done').length}/{containerNodes.length}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 18, top: 36, bottom: 36, width: 2, backgroundColor: C.surfaceContainerHigh, zIndex: 0 }} />
                {containerNodes.map((node, i) => (
                  <div key={node.id}>
                    <div
                      onClick={() => setSelectedNode(node)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 16px', borderRadius: 12, cursor: 'pointer', position: 'relative', zIndex: 1,
                        backgroundColor: selectedNode?.id === node.id ? `${C.primary}1A` : node.status === 'active' ? `${C.secondary}0D` : 'transparent',
                        border: `1px solid ${selectedNode?.id === node.id ? C.primary : node.status === 'active' ? C.secondary : 'transparent'}`,
                        transition: 'all 150ms',
                        marginBottom: i < containerNodes.length - 1 ? 4 : 0,
                      }}
                    >
                      <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: statusBg(node.status), border: `2px solid ${statusBorder(node.status)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 2, boxShadow: node.status === 'done' ? '0 0 12px rgba(104,219,169,0.3)' : node.status === 'active' ? '0 0 12px rgba(246,96,24,0.3)' : 'none' }}>
                        {statusIcon(node.status)}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: node.status === 'locked' ? C.textMuted : C.textHeading, margin: 0, lineHeight: 1.3 }}>{node.title}</h3>
                          {node.status === 'active' && <span style={{ padding: '1px 6px', borderRadius: 4, backgroundColor: `${C.secondary}26`, color: C.secondary, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600 }}>IN PROGRESS</span>}
                        </div>
                        <p style={{ fontSize: 12, color: C.textMuted, margin: '0 0 6px', lineHeight: 1.5 }}>{node.subtitle}</p>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: C.outline }}>
                            <Clock size={11} /> {node.duration}
                          </div>
                          {node.tags.slice(0, 2).map(tag => (
                            <span key={tag} style={{ padding: '1px 6px', borderRadius: 4, backgroundColor: C.surfaceContainerHigh, color: C.textMuted, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {i < containerNodes.length - 1 && (
                      <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 22, height: 12, position: 'relative', zIndex: 1 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.surfaceContainerHighest, border: `1px solid ${C.outlineVariant}`, marginTop: 3 }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Detail panel ── */}
        <div style={{ borderLeft: `1px solid ${C.surfaceContainerHigh}`, backgroundColor: C.surfaceContainerLow, overflow: 'auto', padding: '24px' }}>
          {selectedNode ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Stage header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: statusBg(selectedNode.status), border: `2px solid ${statusBorder(selectedNode.status)}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {statusIcon(selectedNode.status)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.textMuted, textTransform: 'uppercase' }}>Stage {selectedNode.id}</div>
                    {selectedNode.status === 'active' && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.secondary }}>● IN PROGRESS</div>}
                    {selectedNode.status === 'done' && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.primary }}>✓ COMPLETED</div>}
                  </div>
                </div>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 700, color: C.textHeading, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{selectedNode.title}</h2>
                <p style={{ fontSize: 13, color: C.onSurfaceVariant, margin: '0 0 12px', lineHeight: 1.7 }}>{selectedNode.subtitle}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {selectedNode.tags.map(tag => (
                    <span key={tag} style={{ padding: '3px 10px', borderRadius: 6, backgroundColor: C.surfaceContainerHigh, color: C.primary, fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Concept abstract */}
              <div style={{ padding: '16px', borderRadius: 12, backgroundColor: C.surfaceInset }}>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: C.textHeading, margin: '0 0 8px' }}>What you&apos;ll visualize</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[
                    `Live ${selectedNode.tags[0]} execution graph`,
                    'Memory state during transitions',
                    'Step-by-step interactive replay',
                    'AI-powered concept explanation',
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: C.onSurfaceVariant }}>
                      <ChevronRight size={13} style={{ color: C.primary, flexShrink: 0 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Duration + prereqs */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div style={{ padding: '12px', borderRadius: 10, backgroundColor: C.surfaceInset }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.textMuted, marginBottom: 4, textTransform: 'uppercase' }}>Duration</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700, color: C.primary }}>{selectedNode.duration}</div>
                </div>
                <div style={{ padding: '12px', borderRadius: 10, backgroundColor: C.surfaceInset }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.textMuted, marginBottom: 4, textTransform: 'uppercase' }}>Column</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: C.textHeading, textTransform: 'capitalize' }}>{selectedNode.column}</div>
                </div>
              </div>

              {/* Prerequisites check */}
              <div>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600, color: C.textHeading, margin: '0 0 10px' }}>Prerequisites</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {selectedNode.id > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, backgroundColor: `${C.primary}1A` }}>
                      <Check size={14} style={{ color: C.primary }} />
                      <span style={{ fontSize: 13, color: C.onSurface }}>Stage {selectedNode.id - 1} — {roadmapNodes[selectedNode.id - 2]?.title}</span>
                    </div>
                  )}
                  {selectedNode.id === 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, backgroundColor: `${C.primary}1A` }}>
                      <Check size={14} style={{ color: C.primary }} />
                      <span style={{ fontSize: 13, color: C.onSurface }}>No prerequisites — start here!</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              {selectedNode.status === 'locked' ? (
                <div style={{ padding: '14px', borderRadius: 12, backgroundColor: C.surfaceContainerHigh, textAlign: 'center' }}>
                  <Lock size={20} style={{ color: C.textMuted, margin: '0 auto 6px' }} />
                  <p style={{ fontSize: 13, color: C.textMuted, margin: 0 }}>Complete previous stages to unlock this topic.</p>
                </div>
              ) : (
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '14px', borderRadius: 12, border: 'none', backgroundColor: selectedNode.status === 'done' ? C.surfaceContainerHigh : C.primary, color: selectedNode.status === 'done' ? C.onSurface : C.onPrimary, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: selectedNode.status !== 'done' ? '0 0 20px rgba(104,219,169,0.3)' : 'none' }}>
                  {selectedNode.status === 'done' ? (
                    <><BookOpen size={16} /> Review Visual Lesson</>
                  ) : selectedNode.status === 'active' ? (
                    <><Play size={16} /> Resume Visual Lesson <ArrowRight size={16} /></>
                  ) : (
                    <><Play size={16} /> Start Visual Lesson <ArrowRight size={16} /></>
                  )}
                </button>
              )}

              {/* Stats footer */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, paddingTop: 8, borderTop: `1px solid ${C.surfaceContainerHigh}` }}>
                {[
                  { label: 'Viz Steps', value: '24', color: C.primary },
                  { label: 'Exercises', value: '8', color: C.secondary },
                  { label: 'AI Tips', value: '12', color: C.textHeading },
                ].map(({ label, value, color }) => (
                  <div key={label} style={{ textAlign: 'center', padding: '8px', borderRadius: 8, backgroundColor: C.surfaceInset }}>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 700, color }}>{value}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: C.textMuted }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: C.textMuted, textAlign: 'center' }}>
              <BookOpen size={40} style={{ marginBottom: 12, opacity: 0.4 }} />
              <p style={{ fontSize: 14 }}>Click a roadmap stage to see details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
