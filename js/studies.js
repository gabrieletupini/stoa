// Standalone long-form readings — one self-contained HTML file each under
// /studies/<theme>/<name>.html, so each opens in a new tab and downloads as a
// complete document (same pattern as the life-lessons pickup studies).
//
// A trigger references readings via a `studyIds` array on its Firestore doc.
// `triggerTypes` decides which triggers suggest the reading in the log modal:
// an empty array means "general" — it surfaces for every trigger type.

export const STUDIES = [
  {
    id: 'anger-anatomy',
    title: 'The Anatomy of Anger',
    excerpt:
      'Why venting pours fuel on the fire, how anger is a grab for control we never had, the poison we drink ourselves — and how long the stress hormone actually lingers after a single trigger.',
    readingMinutes: 9,
    file: 'studies/anger/the-anatomy-of-anger.html',
    publishedAt: '2026-06-01',
    triggerTypes: [], // general — relevant to job, news, hypochondria alike
  },
  {
    id: 'anger-fuse',
    title: 'The Anger Fuse',
    excerpt:
      'Why you can wake centered and be triggered before you could stop it — the cortisol awakening response, hypoglycemic rage (the meanest fuse-clipper), sleep debt and the amygdala, LeDoux\'s low road, the two wolves as habits with a body, and the genetics question argued both ways.',
    readingMinutes: 13,
    file: 'studies/anger/the-anger-fuse.html',
    publishedAt: '2026-06-08',
    triggerTypes: [],
  },
  {
    id: 'tax-and-teacher',
    title: 'The Tax and the Teacher',
    excerpt:
      "A trigger is two things at once: a cost the body pays in full whether or not anything comes of it — and the only honest mirror that shows up uninvited. You would not choose the fire, but if you are standing in one, you do not waste it.",
    readingMinutes: 8,
    file: 'studies/triggers/the-tax-and-the-teacher.html',
    publishedAt: '2026-06-10',
    triggerTypes: [],
  },
];
