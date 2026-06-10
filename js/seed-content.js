// ===== Protocols =====
// Structured interventions. Grouped by target emotion. Each one a sequence of
// steps, with cited sources so they're not just "wellness vibes".

export const PROTOCOLS = [
  {
    id: 'anger-acute-6step',
    name: 'Acute anger — six steps',
    icon: '🜂',
    targetEmotion: 'anger',
    minutes: 5,
    description:
      'For the spike, when the muscle in the jaw clenches and you want to fire back. The point is to insert a pause between stimulus and response, where freedom lives.',
    steps: [
      'Name it, silently or aloud: "I am feeling anger." Naming a state slightly disengages from it (Lieberman et al., 2007, "Putting feelings into words").',
      'Ten slow breaths through the nose before any reply. If you cannot count to ten, count to two.',
      'Distance yourself: ask "Will this matter in five years? In five months? In five hours?" Most things shrink under that lens.',
      'Steel-man the other person. What is the most charitable explanation for their behaviour? Stoics call this the principle of generous interpretation.',
      'Act from your value, not your impulse. What kind of person do you want to be when this is over?',
      'Release. As Marcus Aurelius put it: holding onto anger is drinking poison and expecting the other person to die.',
    ],
    sources: [
      { name: 'Marcus Aurelius, Meditations XI.18' },
      { name: 'Lieberman MD et al. (2007). "Putting feelings into words: affect labeling disrupts amygdala activity." Psychological Science.' },
      { name: 'Seneca, De Ira (On Anger), Book III' },
    ],
  },
  {
    id: 'anxiety-night-478',
    name: 'Night anxiety spiral — 4-7-8 breath',
    icon: '⏾',
    targetEmotion: 'anxiety',
    minutes: 4,
    description:
      'When the room is dark, the mind keeps running and the body keeps signalling "danger". The 4-7-8 cycle lengthens the exhale, which down-regulates the sympathetic nervous system.',
    steps: [
      'Empty your lungs through the mouth with a soft "whoosh".',
      'Close your mouth. Inhale quietly through the nose for 4 seconds.',
      'Hold the breath for 7 seconds.',
      'Exhale slowly through the mouth for 8 seconds, again with the "whoosh".',
      'That is one cycle. Repeat for four cycles total.',
      'Do not chase sleep. Let the body slow first; sleep follows.',
    ],
    sources: [
      { name: 'Weil A. (2015). Breathing: The Master Key to Self Healing.' },
      { name: 'Jerath R. et al. (2015). "Self-Regulation of Breathing as a Primary Treatment for Anxiety." Applied Psychophysiology and Biofeedback.' },
    ],
  },
  {
    id: 'hypochondria-defusion',
    name: 'Hypochondria — cognitive defusion + worry time',
    icon: '⊙',
    targetEmotion: 'hypochondria',
    minutes: 6,
    description:
      'Health anxiety is fed by two habits: body-scanning and reassurance-seeking. Both confirm the alarm. This protocol breaks the loop with a small linguistic trick and a postponement.',
    steps: [
      'Notice the thought arriving. Reframe it: from "I have X" to "I am noticing the thought that I have X." That tiny phrase creates distance (ACT — Hayes).',
      'Do not body-scan. Do not Google. Do not ask anyone for reassurance. Each of these is a private confession that the thought is true.',
      'Postpone: tell the thought "I\'ll consider you at 6:00 pm in worry time." Write it down on a slip if needed.',
      'At your scheduled worry time, set a 15-minute timer and let the worry have its turn. Most of the urgency will have evaporated by then.',
      'If a symptom persists for more than two weeks, see a doctor once. Then trust the doctor.',
    ],
    sources: [
      { name: 'Salkovskis PM, Warwick HMC (1986). "Morbid preoccupations, health anxiety and reassurance: a cognitive-behavioural approach." Behaviour Research and Therapy.' },
      { name: 'Hayes SC. (2004). Acceptance and Commitment Therapy.' },
      { name: 'DSM-5: Illness Anxiety Disorder, criteria & treatment.' },
    ],
  },
  {
    id: 'sadness-activation',
    name: 'Acute sadness — behavioural activation',
    icon: '⌒',
    targetEmotion: 'sadness',
    minutes: 15,
    description:
      'Sadness narrows the body and pulls you toward stillness and isolation. Acting against that gravity, even slightly, is the first move out.',
    steps: [
      'Do not isolate. Send one message to one person, even a short one.',
      'Move the body, gently. A ten-minute walk outside is enough. Sunlight if available.',
      'Express the feeling, do not bury it. Write three lines, or speak it aloud to yourself.',
      'Do one small thing that used to give you pleasure, even if today it feels flat. Behaviour leads mood, not the other way around.',
      'Avoid alcohol and doom-scrolling — both deepen the trough.',
    ],
    sources: [
      { name: 'Jacobson NS et al. (1996). "A component analysis of cognitive-behavioral treatment for depression." Behavioral activation as effective stand-alone treatment.' },
      { name: 'Dimidjian S et al. (2006). "Randomized trial of behavioral activation, cognitive therapy, and antidepressant medication for major depression."' },
    ],
  },
  {
    id: 'general-halt',
    name: 'HALT check',
    icon: '✋',
    targetEmotion: 'general',
    minutes: 2,
    description:
      'Before reacting to a feeling, check the four states that quietly amplify everything else. Most "this is a real problem" turns out to be one of these.',
    steps: [
      'Hungry? — eat something. Low blood sugar mimics anxiety and irritability.',
      'Angry? — leave the scene briefly, breathe, then decide. Reread the anger protocol if it persists.',
      'Lonely? — reach out to one person. Voice or message, your choice.',
      'Tired? — rest, nap, or accept that decisions made now will be poor.',
      'If two of HALT are true, do not make any consequential decision today.',
    ],
    sources: [
      { name: 'HALT — clinical mnemonic widely used in addiction recovery and CBT (Alcoholics Anonymous, since 1940s).' },
    ],
  },
  {
    id: 'general-rain',
    name: 'RAIN — sitting with what arises',
    icon: '☂',
    targetEmotion: 'general',
    minutes: 8,
    description:
      'Tara Brach\'s four-step practice for staying present with a difficult feeling instead of escaping into food, scrolling, or argument.',
    steps: [
      'Recognize: name what is here. "Anxiety in the chest." "Heat of anger." "Heaviness." Be specific.',
      'Allow: let it be present without fixing it. You are not endorsing it; you are stopping the fight.',
      'Investigate: where is it in the body? What thought feeds it? What does it want — to be heard, to be safe, to be loved?',
      'Nurture: offer kindness to that part. A hand on the heart. A soft phrase like "I see you, this is hard."',
      'Stay for as long as you can without trying to make the feeling go away. Often, when held, it softens on its own.',
    ],
    sources: [
      { name: 'Brach T. (2019). Radical Compassion: Learning to Love Yourself and Your World with the Practice of RAIN.' },
    ],
  },
  {
    id: 'general-gratitude',
    name: 'Three things — gratitude',
    icon: '✸',
    targetEmotion: 'general',
    minutes: 4,
    description:
      'The simplest practice with the strongest evidence base. Specificity is the active ingredient.',
    steps: [
      'Every evening, write three things from today that you are grateful for.',
      'They must be specific to TODAY — not "my health" or "my family", but "the way the light hit the table at lunch", "that B. laughed at my joke", "the bread did not stick to the pan".',
      'No repetition across days. Force the eye to notice new ones.',
      'Read last week\'s entries on Sunday. The accumulation is the practice.',
    ],
    sources: [
      { name: 'Emmons RA, McCullough ME (2003). "Counting blessings versus burdens." Journal of Personality and Social Psychology.' },
      { name: 'Seligman MEP et al. (2005). "Positive psychology progress: empirical validation of interventions."' },
    ],
  },
  {
    id: 'love-metta',
    name: 'Loving-kindness — five minutes',
    icon: '❀',
    targetEmotion: 'love',
    minutes: 10,
    description:
      'Metta meditation. Five expanding circles of goodwill. Tested in clinical trials; reliably increases positive affect and reduces self-criticism.',
    steps: [
      'Sit. Close the eyes. Bring yourself to mind. Silently: "May I be safe. May I be well. May I be at ease."',
      'Bring to mind someone you love easily. Repeat the phrases toward them.',
      'Bring to mind a neutral person — the cashier, a neighbour. Same phrases.',
      'Bring to mind someone difficult (start small — not your worst enemy). Same phrases. This is the hard one and the point of the practice.',
      'Expand to all beings: "May all beings be safe. May all beings be well. May all beings be at ease." Stay one minute longer than feels natural.',
    ],
    sources: [
      { name: 'Salzberg S. (1995). Lovingkindness: The Revolutionary Art of Happiness.' },
      { name: 'Fredrickson BL et al. (2008). "Open hearts build lives: positive emotions, induced through loving-kindness meditation, build consequential personal resources." Journal of Personality and Social Psychology.' },
    ],
  },
];

// ===== Library articles =====
// Long-form essays. body is HTML (limited to p / blockquote / h3 / strong / em).
// All quotes and claims are referenced in the sources array.

export const ARTICLES = [
  {
    id: 'finger-and-moon',
    title: 'The Finger and the Moon',
    topic: 'philosophy',
    excerpt:
      "Every religion has two layers — the pointing finger and the moon it points at. The first is the artifact humans defend with their lives; the second is the reality that has never needed defending.",
    readingMinutes: 8,
    publishedAt: '2026-06-10',
    body: `
<p>There is the religion that is taught, and there is the religion that is true, and most people spend a lifetime mistaking the first for the second.</p>

<p>Every tradition has two layers. The first is what can be written down: the words, the rituals, the names of God, the metaphysics, the cosmology, the calendar of feasts. This is the human work — the scaffolding built across centuries to point at something. The second is what the scaffolding points at: the thing itself, the reality that does not depend on which book you opened or which century you were born in. The old Zen teachers had the cleanest image for the distinction. <strong>The finger points at the moon. The finger is not the moon. Do not mistake one for the other.</strong></p>

<h3>The moon does not need defending</h3>
<p>What every tradition reports, when it gets quiet enough to listen — the Christian mystic, the Sufi, the Buddhist sitter, the Hindu sage, the Hasid, the Quaker — is the same set of things, in close to the same order. A stillness underneath the surface noise. The disappearance of the line between you and the rest of the world. A sense that everything is happening to and as one thing. The peace that, the New Testament says, passes understanding; that the Bhagavad Gita calls <em>shanti</em>; that the Tao Te Ching points at when it says the way that can be named is not the eternal way.</p>

<p>You can read all four side by side and the reports converge. Not because the authors copied each other — most never met — but because they were describing the same country from different doors. <strong>That country is the moon.</strong> It does not need a defender. It is already what is. You will not strengthen it by arguing for it. You will not weaken it by doubting it. It survives all conversation about it.</p>

<h3>The finger gets attached to</h3>
<p>The pointing finger is different. The finger is a human artifact, and humans get attached to their artifacts. The particular shape of the finger — the doctrine, the language, the lineage — becomes, in enough generations, the thing itself. The map becomes the country. The story about God becomes God. And then the question shifts from <em>have I seen what this points at?</em> to <em>is my finger the right finger?</em></p>

<p>This is where things get expensive.</p>

<h3>The collective finger</h3>
<p>Consider what happens when a finger grows large enough to belong to a country. The same God of Abraham is invoked, today, by three traditions that have spent fourteen centuries killing each other over which prophet, which book, which uncle, which hill. Sunni and Shia split in the year 632 over who should succeed Muhammad — not over the moon, over the finger — and the descendants of that argument are still detonating in Damascus and Baghdad. The Crusaders rode into Jerusalem with a cross on their shields, killed the Jewish and Muslim inhabitants in their houses, and prayed in the same Holy Sepulchre at the end of the day. The Buddhist monks of Myanmar, whose central instruction is non-harm, have led mobs against the Rohingya. The same human hand, holding similar fingers, pointing at slightly different angles, has caused more bloodshed than most plagues.</p>

<p>None of those wars were fought over the moon. They were fought over the angle of the finger. <strong>Mine is straighter. Mine has the right joint. Mine is in the right book.</strong> The collective ego attaches to the finger the way the personal ego attaches to a face in the mirror — it confuses the thing it identifies with for what it actually is. And once a million people have made the same confusion together, the finger has its own momentum, and it can move armies.</p>

<p>The pattern is the same at every scale. Two believers in the same religion will argue about a footnote. Two within the same denomination will argue about a verse. Two within the same household will argue about how the verse should be read aloud. The argument is never about the moon. The moon is fine.</p>

<h3>Why this matters in a normal life</h3>
<p>You do not need to be running an empire to feel the cost. The same mechanism is at work in the friend who left the conversation hurt because you do not believe the same thing they do, in the family thread that goes quiet at Christmas because someone said one wrong sentence about faith, in the inner pressure to defend a position you have not actually examined since you were a child. Every one of these is the finger thinking it is the moon.</p>

<p>If you can hold the two layers apart in your own mind — the finger here, the moon there — you become harder to convert and easier to learn from. You can read the Sermon on the Mount and the Tao Te Ching and the Dhammapada in the same week and notice they are describing the same room from three sides. You can sit with someone of a different tradition and find more in common than not. <strong>You stop defending a finger.</strong> You also become less defensive about your own; the particular tradition you were raised in, or chose, is not less true for being one of many — it is one specific door into the same room. Loving your door does not require demolishing the others.</p>

<h3>What the Buddha actually said</h3>
<p>In the Kalama Sutta, when the people of Kalama ask the Buddha which of the many wandering teachers passing through their village to believe, his answer is famously the opposite of the answer of almost every other religious teacher in history. He does not tell them to believe him. He tells them not to.</p>

<blockquote>"Do not go by reports, by legends, by tradition, by scripture, by logical conjecture, by inference, by analogies, by agreement through pondering views, by probability, or by the thought 'this contemplative is our teacher.' When you yourselves know: <em>these qualities, when adopted and carried out, lead to welfare and to happiness</em> — then enter and remain in them."</blockquote>

<p>The line is usually paraphrased: <em>do not believe anything I say if it does not resonate with you</em>. The paraphrase is a little softer than the original, but the meaning survives. The Buddha is pointing at his own finger and telling you not to mistake it for the moon. <strong>Look at what I am pointing at. If you see it, you do not need me. If you do not see it, no amount of believing me will help.</strong></p>

<p>Two and a half thousand years later, the instruction still costs nothing to follow. The moon is right where he said it would be. The finger is whatever finger you came in with. The work is not to defend it. The work is to look up.</p>
`,
    sources: [
      { name: 'Anguttara Nikaya 3.65 — the Kalama Sutta. (Thanissaro Bhikkhu translation.)' },
      { name: 'Aldous Huxley. (1945). The Perennial Philosophy. (The classic case for a shared mystical core across traditions.)' },
      { name: 'Huston Smith. (1991). The World\\u2019s Religions.' },
      { name: 'Karen Armstrong. (1993). A History of God: The 4,000-Year Quest of Judaism, Christianity and Islam.' },
      { name: 'Tao Te Ching, chapter 1. (Mitchell, Lau, and Henricks translations.)' },
    ],
  },
  {
    id: 'marcus-on-anger',
    title: 'Marcus Aurelius on anger',
    topic: 'anger',
    excerpt:
      'Ten quiet reminders from a Roman emperor who hated his own temper. The remedy is not heroic willpower — it is small, repeated correction.',
    readingMinutes: 5,
    publishedAt: '2026-02-10',
    body: `
<p>Of all the Meditations, Book XI section 18 is the one Marcus Aurelius keeps returning to. He calls it "ten gifts from the Muses." It is a list of antidotes against losing one’s temper, and what is striking is how unheroic it is. There is no instruction to become a saint. The instructions are domestic, almost embarrassing in their smallness.</p>

<p>He starts where he should: <em>I am part of a whole. The whole has interests. I am not the centre.</em> Anger forgets this in a single second.</p>

<blockquote>"When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous and surly. They are like this because they cannot tell good from evil."</blockquote>

<p>The point of saying it in the morning is not pessimism. It is preparation. If you expect a bumpy road, you do not curse the first bump. The Stoics called this <em>premeditatio malorum</em> — the rehearsal of difficulty so that, when it comes, you meet it instead of being met by it.</p>

<h3>The second gift: charity</h3>
<p>Marcus invites us to consider the person who has wronged us. What do they actually <em>believe</em> they are doing? Almost no one acts because they think they are doing evil. They have a story, and inside that story, they are reasonable. You may disagree with the story — you almost certainly do — but seeing it dilutes the certainty of your anger.</p>

<h3>The third: time</h3>
<p>"How short the time is in which both giver and receiver of anger are gone." A reminder that the whole drama, the indignation, the rehearsal of comebacks in the shower — all of it ends, and soon. Not as despair. As perspective.</p>

<h3>What it does not tell you to do</h3>
<p>It does not tell you to suppress. It does not say "be calm." It assumes the anger is already there. The work is to <strong>not water it</strong>: not feed it with private monologues, not enact it in a reply, not let it shape decisions you cannot take back.</p>

<p>The practical extract, the kind you can put on a card: <em>If you must respond, wait. If you cannot wait, write the response and do not send it. If you cannot help sending it, send only the bones, never the flesh.</em></p>
`,
    sources: [
      { name: 'Marcus Aurelius, Meditations, Book XI section 18. Hays translation (2002).' },
      { name: 'Pierre Hadot. (1998). The Inner Citadel: The Meditations of Marcus Aurelius.' },
      { name: 'Seneca. De Ira (On Anger), Books I-III.' },
    ],
  },
  {
    id: 'hypochondria-spiral',
    title: 'The hypochondria spiral, and how to step off it',
    topic: 'hypochondria',
    excerpt:
      'Health anxiety has a clean cognitive model — and an unintuitive treatment. The thing that feels like care is what keeps it going.',
    readingMinutes: 6,
    publishedAt: '2026-02-18',
    body: `
<p>Hypochondria, in its modern clinical name <em>illness anxiety disorder</em>, has a remarkably tidy cognitive model, mostly thanks to Paul Salkovskis and his colleagues at Oxford in the late 1980s. The model has three moving parts.</p>

<h3>One: catastrophic misinterpretation</h3>
<p>An ambiguous body signal — a twinge, a flutter, a mark on the skin — is interpreted as evidence of a serious illness. Everyone has these signals. The hypochondriac has the same signals as everyone else; the difference is the meaning given to them.</p>

<h3>Two: safety behaviours</h3>
<p>The mind then tries to reduce the anxiety with what feel like sensible actions. Checking the body. Searching online. Asking a partner if "this looks normal." Going to the doctor for the third time this month. Each of these behaviours is the trap. They <strong>feel</strong> like resolution and they <strong>function</strong> as confirmation. The brain logs: <em>this thought required action, therefore the thought was important.</em></p>

<h3>Three: selective attention</h3>
<p>Once a body part is suspected, the attentional system fixates on it. The throat that is mildly dry becomes the throat that is the centre of the day. The chest gets monitored, and the more you monitor it, the more sensations you notice, and the more you notice the more there is to interpret.</p>

<blockquote>"Reassurance, in health anxiety, is a doctor of poor character. It promises rest, delivers it for an hour, and then asks to be called again." — paraphrasing Salkovskis</blockquote>

<h3>The treatment is counterintuitive</h3>
<p>The CBT approach for health anxiety does not try to convince you that you are not ill. It cannot, because there is always a non-zero chance. Instead it asks you to drop the safety behaviours. No more body-scanning. No more Googling. No more asking. No more checking. <em>Especially</em> no more asking.</p>

<p>This is hard. The behaviours have given you small comforts for years. Letting them go feels reckless. The point is that they were never giving comfort, they were producing the next wave of anxiety twenty minutes later. The waves stop when you stop feeding them.</p>

<p>A doctor’s appointment, once, for a persistent symptom, is reasonable medicine. Three doctors in two weeks for the same mole is the disorder, not the diagnosis.</p>

<h3>A small useful trick</h3>
<p>From ACT (Hayes, 1999): when the thought "what if it’s cancer" arrives, do not argue with it. Reframe to "I am noticing the thought that what if it’s cancer." That tiny extra phrase — <em>noticing</em> — changes the relationship from "this thought is reality" to "this thought is a thing I am observing." The distance is small, but a millimetre of distance is enough to start the whole cycle slowing down.</p>
`,
    sources: [
      { name: 'Salkovskis PM, Warwick HMC. (1986). "Morbid preoccupations, health anxiety and reassurance: a cognitive-behavioural approach." Behaviour Research and Therapy 24(5).' },
      { name: 'Salkovskis PM et al. (2002). Cognitive-Behavioural Treatment of Health Anxiety. Clinical handbook.' },
      { name: 'Hayes SC. (1999). Acceptance and Commitment Therapy: An Experiential Approach to Behavior Change.' },
      { name: 'American Psychiatric Association. (2013). DSM-5: Illness Anxiety Disorder, 300.7.' },
    ],
  },
  {
    id: 'pema-groundlessness',
    title: 'Pema Chödrön: staying with the discomfort',
    topic: 'anxiety',
    excerpt:
      'A Buddhist nun’s argument that the moment you most want to escape your own experience is also the moment most worth staying.',
    readingMinutes: 5,
    publishedAt: '2026-02-25',
    body: `
<p>Pema Chödrön’s central insight, in <em>When Things Fall Apart</em> and through forty years of teaching since, is that we spend an enormous portion of our lives trying to escape <em>groundlessness</em> — the uncomfortable, anxious, unsettled feeling of not knowing what is next, of being out of control, of standing on what feels like nothing.</p>

<p>And our strategies for escape are inventive: we eat, we scroll, we pick a fight, we make a plan, we plan a holiday, we resolve to never feel this way again. None of them work for long. The feeling comes back.</p>

<blockquote>"Things falling apart is a kind of testing and also a kind of healing. We think that the point is to pass the test or to overcome the problem, but the truth is that things don’t really get solved. They come together and they fall apart."</blockquote>

<h3>The opposite move</h3>
<p>Her instruction is the inverse of everything our culture tells us: when you feel that wobble — do not flee. Do not fix. Do not narrate. Just <em>stay</em>. Notice that the feeling is in the body. Notice that you want to leave it. Notice the texture of the wanting-to-leave. That is the practice.</p>

<p>This is not stoic suppression. It is not pretending the feeling is not there. It is the much more difficult act of <em>letting the feeling be there without doing anything about it</em>.</p>

<h3>Why this works</h3>
<p>The neuroscience translation, courtesy of Daniel Siegel and others, is that emotions that are met with awareness and acceptance — rather than fought or avoided — tend to integrate and pass. Emotions that are fought or avoided keep coming back, often with interest, because they have not been allowed to do their work.</p>

<p>Chödrön calls this <em>the wisdom of no escape</em>. The escape itself is the problem. Not the difficult feeling.</p>

<h3>A small practice</h3>
<p>Next time you feel the urge to check your phone for the fourth time in five minutes, or open the fridge when you are not hungry, or send a text you will regret: pause. Ask yourself what feeling you are trying to outrun. Sit with it for sixty seconds. Just sixty. You do not have to enjoy it. You only have to not run.</p>

<p>It will, almost always, soften. Not because you fixed it. Because you finally let it finish.</p>
`,
    sources: [
      { name: 'Chödrön P. (1997). When Things Fall Apart: Heart Advice for Difficult Times. Shambhala.' },
      { name: 'Chödrön P. (2001). The Wisdom of No Escape. Shambhala.' },
      { name: 'Siegel DJ. (2010). Mindsight: The New Science of Personal Transformation.' },
    ],
  },
  {
    id: 'sleep-emotion',
    title: 'Sleep and the regulation of emotion',
    topic: 'sleep',
    excerpt:
      'A single bad night turns the amygdala into a smoke alarm with no off-switch. The data is depressingly precise.',
    readingMinutes: 4,
    publishedAt: '2026-03-03',
    body: `
<p>The relationship between sleep and emotional regulation is now one of the most replicated findings in neuroscience, largely because of the work of Matthew Walker at Berkeley and his collaborators over the last two decades.</p>

<p>The headline finding, from Yoo et al. (2007): after a single night of total sleep deprivation, the amygdala — the brain’s threat-detection circuit — reacts about <strong>60 percent more strongly</strong> to negative images. The connection between the amygdala and the prefrontal cortex, which normally provides top-down regulation, is also weakened. In plain language: a sleep-deprived brain is more reactive and less able to brake.</p>

<blockquote>"It is as though, without sleep, our brain reverts to a more primitive pattern of uncontrolled reactivity." — Matthew Walker</blockquote>

<h3>REM is doing emotional work</h3>
<p>The mechanism appears to involve REM sleep specifically. During REM, the brain replays emotionally charged events but with the noradrenaline (a stress chemical) almost entirely switched off. This is unique to REM. The result is that the emotional <em>content</em> of a memory is reprocessed without the original distress — the brain effectively "takes the sting out" of yesterday’s difficult events overnight.</p>

<p>When REM is cut short — by alcohol, by late nights, by too-early alarms, by THC — the sting stays. The memory comes back tomorrow with its full charge. This is part of why insomnia and depression are so tightly linked: not because depression causes insomnia (it does, but the relationship is two-way), but because chronic sleep loss removes the brain’s nightly emotional digestion.</p>

<h3>What this means in practice</h3>
<p>You cannot solve emotional dysregulation by trying harder. You can solve a substantial chunk of it by sleeping seven to nine hours. The studies are unambiguous on this. People who routinely sleep less than six hours rate their emotional state, on average, two full points lower on standardized mood scales than the same people when adequately rested.</p>

<p>It is the most underused antidepressant we have, and it is free.</p>
`,
    sources: [
      { name: 'Walker MP. (2017). Why We Sleep: Unlocking the Power of Sleep and Dreams.' },
      { name: 'Yoo SS, Gujar N, Hu P, Jolesz FA, Walker MP. (2007). "The human emotional brain without sleep — a prefrontal amygdala disconnect." Current Biology 17(20).' },
      { name: 'van der Helm E, Walker MP. (2012). "Sleep and emotional memory processing." Sleep Medicine Clinics.' },
    ],
  },
  {
    id: 'halt-mnemonic',
    title: 'HALT: the four states that distort everything else',
    topic: 'general',
    excerpt:
      'The most useful four letters in self-knowledge. Before treating a feeling as data about the world, check whether it is data about your body.',
    readingMinutes: 3,
    publishedAt: '2026-03-09',
    body: `
<p>HALT — <strong>Hungry, Angry, Lonely, Tired</strong> — originated in 12-step recovery communities sometime in the mid-twentieth century. It has since been adopted by cognitive-behavioural therapists, sponsors, parents, monks, and anyone else who has noticed that <em>most of what we call a "real problem" is one of these four states wearing a costume</em>.</p>

<p>The idea is small but underused: before you trust a strong negative feeling as accurate information about reality, run it through the four-letter filter.</p>

<h3>Hungry</h3>
<p>Low blood sugar produces irritability and anxiety almost indistinguishable from their psychological cousins. The classic test: if a difficult conversation is going badly at 12:45 pm, eat something and come back at 1:15. Often the problem has changed shape, or shrunk, or evaporated.</p>

<h3>Angry</h3>
<p>If you are angry, you cannot make a good decision. The prefrontal cortex is offline. The instruction is not to suppress the anger but to <em>postpone the decision</em>. Sleep on it. Walk on it. Wait one hour minimum, preferably twelve.</p>

<h3>Lonely</h3>
<p>Many existential crises are loneliness in a tuxedo. The thoughts feel philosophical — about meaning, about purpose, about the size of one’s life — but the cure is shockingly mundane: speak with a person. Not text. Voice. Even briefly. Watch the philosophy shrink.</p>

<h3>Tired</h3>
<p>This one we covered separately. A tired brain is a brain whose threat alarm is mis-calibrated. Tired you should not make decisions about marriages, jobs, or how the day went.</p>

<h3>The rule</h3>
<p>If two or more of HALT are present, you do not have a problem with reality; you have a problem with your current internal state. Treat the state first. Reconsider reality afterwards. Most of the time, the reconsidering will not be necessary.</p>
`,
    sources: [
      { name: 'Alcoholics Anonymous, Twelve Steps and Twelve Traditions (1953). The HALT acronym has been part of recovery culture since at least the 1940s.' },
      { name: 'Beck JS. (2011). Cognitive Behavior Therapy: Basics and Beyond. On state-dependent cognitive distortion.' },
    ],
  },
  {
    id: 'metta-research',
    title: 'Loving-kindness, in the lab and in the cushion',
    topic: 'love',
    excerpt:
      'A meditation that sounds like a Hallmark card, except the clinical data on it is some of the cleanest in contemplative neuroscience.',
    readingMinutes: 4,
    publishedAt: '2026-03-17',
    body: `
<p>Loving-kindness meditation — <em>metta bhavana</em> in Pali, "the cultivation of friendliness" — is one of the oldest meditation practices, going back to the Buddha’s direct teachings. The instruction is almost embarrassingly simple: silently wish well to a series of people, beginning with yourself and expanding outward.</p>

<p>The phrases vary by tradition but they tend to circle the same four wishes: <em>may you be safe, may you be well, may you be at ease, may you be happy.</em></p>

<blockquote>"Love and compassion are necessities, not luxuries. Without them humanity cannot survive." — the Dalai Lama, frequently quoted in metta literature</blockquote>

<h3>What the research shows</h3>
<p>Barbara Fredrickson and her colleagues at the University of North Carolina ran a now-classic trial in 2008: 139 working adults, randomized to either a control group or a seven-week loving-kindness meditation programme. They tracked self-reported positive emotions daily.</p>

<p>The meditators showed steady increases in nine distinct positive emotions — joy, gratitude, contentment, hope, pride, amusement, inspiration, awe, and love itself — across the study period. More interesting: those gains predicted, three months later, broader life resources: better social connections, more mindfulness, greater purpose. The effects compounded.</p>

<p>Hofmann et al. (2011) ran a meta-analysis: across 22 studies, metta produced reliable reductions in negative affect, particularly self-criticism, and reliable increases in positive affect. The effect sizes were moderate — not miraculous, but cleanly there.</p>

<h3>The hard step</h3>
<p>The traditional sequence is: self, beloved, neutral, difficult, all beings. The fourth station — sending good wishes to someone difficult — is where the practice does its actual work.</p>

<p>The instruction is not to forgive them. It is not to excuse them. It is to wish, for the duration of a few breaths, that they be safe, well, at ease. You will notice resistance. You will notice that you do not want them to be at ease. You may notice that you want them to suffer, or at least to understand. <strong>That noticing is the practice.</strong></p>

<p>Salzberg, who brought metta to the West in a serious way in the late 1980s, is careful to say: this is not pretending. It is not feeling something you do not feel. It is repeating phrases that you hope, over time, become true.</p>

<h3>A small thing to try</h3>
<p>Five minutes. Sit. Yourself first: <em>may I be safe, may I be well, may I be at ease.</em> Then a person you love easily. Then a neutral person — the cashier at the supermarket whose name you do not know. Stop there if you wish. The next stations come with practice.</p>
`,
    sources: [
      { name: 'Salzberg S. (1995). Lovingkindness: The Revolutionary Art of Happiness. Shambhala.' },
      { name: 'Fredrickson BL, Cohn MA, Coffey KA, Pek J, Finkel SM. (2008). "Open hearts build lives: positive emotions, induced through loving-kindness meditation, build consequential personal resources." Journal of Personality and Social Psychology 95(5).' },
      { name: 'Hofmann SG, Grossman P, Hinton DE. (2011). "Loving-kindness and compassion meditation: potential for psychological interventions." Clinical Psychology Review 31(7).' },
    ],
  },
  {
    id: 'premeditatio-malorum',
    title: 'Premeditatio malorum: the value of imagining loss',
    topic: 'serenity',
    excerpt:
      'A Stoic exercise that sounds morbid and turns out to be the most reliable engine of gratitude we have.',
    readingMinutes: 4,
    publishedAt: '2026-03-25',
    body: `
<p>Premeditatio malorum — the premeditation of evils — was one of the most important practices of the late Stoics, particularly Seneca, Epictetus and Marcus Aurelius. The instruction is to spend a few minutes regularly imagining the loss of what you currently have.</p>

<p>Your job. Your home. The people you love. Your health. Your eyesight. The chair you are sitting on. The bread on the table. Imagine them gone. Imagine the day you would have to live without them.</p>

<p>To modern ears this sounds pathological, possibly depressive. It is in fact the opposite. It is one of the most efficient antidotes to <em>hedonic adaptation</em> — the brain’s relentless habit of normalising whatever it already has, and therefore stopping seeing it.</p>

<blockquote>"He robs present ills of their power who has perceived their coming beforehand." — Seneca, Letters to Lucilius 76</blockquote>

<h3>The two effects</h3>
<p><strong>Gratitude.</strong> After imagining the absence of something, returning to its presence registers freshly. The light in your kitchen, the sound of someone else breathing in the next room, the cup of coffee in your hand — they appear, briefly, as if for the first time. Researchers in modern positive psychology have replicated this effect with a much less elegant name: "mental subtraction." Koo et al. (2008) showed that participants asked to imagine the absence of a positive event reported higher gratitude and positive affect than those simply asked to remember the event.</p>

<p><strong>Resilience.</strong> When loss does come — because it always does, eventually — it does not arrive as a stranger. You have already considered it. The grief is still grief, the loss is still loss, but it is not also <em>betrayal of an expected order</em>. You expected this could happen. You are not undone by the fact that the universe permits it.</p>

<h3>The practice</h3>
<p>Five minutes, once a week is enough to start. Pick one thing you currently take for granted. Spend a few minutes imagining its absence, in concrete detail. Not as catastrophising — not "what if my house burns down tonight" played on a loop — but as a calm rehearsal: <em>this thing I have, I will not always have. Today I have it.</em></p>

<p>Then return your attention to whatever you were doing. The Stoics did not believe in dwelling. The exercise is brief and finished. Its effects are quiet and lasting.</p>

<h3>What it is not</h3>
<p>It is not pessimism. It is not anxious rehearsal. The hypochondriac is also imagining bad outcomes; that is not premeditatio malorum, that is rumination. The difference is that the Stoic returns from the imagination calmer, more grateful, more present. The ruminator returns more anxious, more confirmed in the fear. If you find your premeditatio malorum tipping into the second, stop. The practice is medicine, not pathology.</p>
`,
    sources: [
      { name: 'Seneca. Letters to Lucilius, Letter 76 and Letter 91.' },
      { name: 'Epictetus. Discourses, Book III chapter 24. Enchiridion 21.' },
      { name: 'Holiday R, Hanselman S. (2016). The Daily Stoic. Modern accessible introduction to premeditatio malorum.' },
      { name: 'Koo M, Algoe SB, Wilson TD, Gilbert DT. (2008). "It’s a wonderful life: mentally subtracting positive events improves people’s affective states, contrary to their affective forecasts." Journal of Personality and Social Psychology 95(5).' },
    ],
  },
  {
    id: 'naming-feelings',
    title: 'Naming what you feel — the cheapest intervention there is',
    topic: 'general',
    excerpt:
      'Putting a feeling into a single accurate word measurably reduces its hold on you. The neuroscience is satisfyingly clean.',
    readingMinutes: 3,
    publishedAt: '2026-04-01',
    body: `
<p>Matthew Lieberman and his colleagues at UCLA ran a now-famous fMRI study in 2007. Participants viewed images of faces showing strong negative emotions. In one condition they simply observed. In another they labelled the emotion in a single word: angry, fearful, disgusted.</p>

<p>The labelling condition showed two simultaneous neural effects: the amygdala — the brain’s threat alarm — became less active, and the right ventrolateral prefrontal cortex — a region involved in deliberate cognitive control — became more active. The two were inversely correlated: the more PFC engagement, the less amygdala reactivity.</p>

<p>The paper was titled, charmingly, <em>"Putting feelings into words."</em></p>

<blockquote>"Affect labeling appears to disrupt the link between an emotional experience and its physiological correlates." — Lieberman et al., 2007</blockquote>

<h3>Why this matters</h3>
<p>It matters because the intervention is free, takes three seconds, and works for nearly everyone. When a feeling rises, before you act on it, name it. Not in a paragraph. In a word.</p>

<p>"I am noticing anger." "There is sadness here." "This is anxiety." The act of putting the experience into language seems to engage the part of the brain that can hold it at arm’s length, which weakens the part that wants to react to it.</p>

<h3>Specificity helps</h3>
<p>Lisa Feldman Barrett’s research on <em>emotional granularity</em> goes further: people who use more precise emotional vocabulary — not just "bad" but "disappointed," "lonely," "resentful," "wounded" — regulate their emotions better, drink less, are less aggressive, and report higher life satisfaction.</p>

<p>The hypothesis is that finer categories give the brain finer tools. "Bad" is too broad to do much with. "Embarrassed about that thing I said in the meeting" you can examine, contextualize, and let go.</p>

<h3>The practice</h3>
<p>When a strong feeling arrives, before responding, ask: <em>what is this, exactly?</em> Reach for the most precise word you have. If three words come, use all three. If the only word is "bad", keep looking. Often the more accurate word is hiding underneath: not anger but hurt, not anxiety but loneliness, not boredom but grief.</p>

<p>This is not a substitute for the other practices. It is the first step of nearly all of them.</p>
`,
    sources: [
      { name: 'Lieberman MD, Eisenberger NI, Crockett MJ, Tom SM, Pfeifer JH, Way BM. (2007). "Putting feelings into words: affect labeling disrupts amygdala activity in response to affective stimuli." Psychological Science 18(5).' },
      { name: 'Barrett LF. (2017). How Emotions Are Made: The Secret Life of the Brain.' },
      { name: 'Kashdan TB, Barrett LF, McKnight PE. (2015). "Unpacking emotion differentiation: transforming unpleasant experience by perceiving distinctions in negativity." Current Directions in Psychological Science.' },
    ],
  },
];

// ===== Quotes shown on Today =====
export const QUOTES = [
  { text: 'You have power over your mind — not outside events. Realize this, and you will find strength.', author: 'Marcus Aurelius' },
  { text: 'Things that matter most must never be at the mercy of things that matter least.', author: 'Goethe (attrib.)' },
  { text: 'Between stimulus and response there is a space. In that space is our power to choose.', author: 'Viktor Frankl (attrib.)' },
  { text: 'The obstacle is the way.', author: 'Marcus Aurelius' },
  { text: 'Patience is bitter, but its fruit is sweet.', author: 'Aristotle (attrib.)' },
  { text: 'Tat tvam asi — thou art that.', author: 'Chandogya Upanishad' },
  { text: 'Resentment is like drinking poison and waiting for the other person to die.', author: 'Saint Augustine (attrib.)' },
  { text: 'The cure for pain is in the pain.', author: 'Rumi' },
  { text: 'No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.', author: 'Buddha' },
  { text: 'He who has a why to live for can bear almost any how.', author: 'Nietzsche' },
  { text: 'May I be safe. May I be well. May I be at ease.', author: 'Metta phrases' },
  { text: 'It is not the man who has too little, but the man who craves more, that is poor.', author: 'Seneca' },
  { text: 'You could leave life right now. Let that determine what you do and say and think.', author: 'Marcus Aurelius' },
  { text: 'What stands in the way becomes the way.', author: 'Marcus Aurelius' },
];

// ===== Emotion catalog (for charts and labels) =====
export const EMOTIONS = [
  { key: 'anger',           label: 'Anger',            color: '#b85a45', warm: true,  invert: true },
  { key: 'angerPropensity', label: 'Anger fuse',        color: '#d08251', warm: true,  invert: true },
  { key: 'sadness',         label: 'Sadness',          color: '#5a6f8b', warm: true,  invert: true },
  { key: 'anxiety',         label: 'Anxiety',          color: '#a17a4a', warm: true,  invert: true },
  { key: 'hypochondria',    label: 'Hypochondria',     color: '#8b6b45', warm: true,  invert: true },
  { key: 'serenity',        label: 'Serenity',         color: '#87a07b', warm: false, invert: false },
  { key: 'love',            label: 'Love',             color: '#c89494', warm: false, invert: false },
];

// Trigger tracker — the recurring sources of negative emotion.
// Data-driven: add a row here to introduce a new trigger type.
export const TRIGGER_TYPES = [
  { key: 'hypochondria', label: 'Hypochondria', color: '#8b6b45' },
  { key: 'job',          label: 'Job',          color: '#5a6f8b' },
  { key: 'news',         label: 'News',         color: '#b85a45' },
  { key: 'other',        label: 'Other',        color: '#9c9388' },
];

// Topic display labels for the Library
export const TOPIC_LABELS = {
  anger: 'On anger',
  sadness: 'On sadness',
  anxiety: 'On anxiety',
  hypochondria: 'On hypochondria',
  serenity: 'On serenity',
  love: 'On love',
  sleep: 'On sleep',
  general: 'General practice',
  philosophy: 'Philosophy',
};
