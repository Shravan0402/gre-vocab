import { WordData } from './types';

export const GRE_WORDS = [
  "Laconic", "Insipid", "Pragmatic", "Iconoclast", "Arduous", "Profligate", "Prosaic", "Ameliorate", 
  "Obsequious", "Capricious", "Fortuitous", "Orthodox", "Alacrity", "Pellucid", "Corroborate", 
  "Magnanimous", "Scrupulous", "Prolific", "Dogmatic", "Placate", "Mercurial", "Exacerbate", 
  "Redundant", "Hackneyed", "Prudent", "Belie", "Esoteric", "Cacophony", "Impetuous", "Idiosyncrasy", 
  "Extant", "Obscure", "Didactic", "Pithy", "Copious", "Ostentatious", "Adulterate", "Vociferous", 
  "Taciturn", "Obdurate", "Garrulous", "Misanthrope", "Lionize", "Imminent", "Frivolous", "Benign", 
  "Dissonance", "Inculpate", "Docile", "Sporadic", "Prevaricate", "Chicanery", "Gainsay", "Eulogy", 
  "Belligerent", "Dispassionate", "Providential", "Diffidence", "Fractious", "Malign", "Disparate", 
  "Plausible", "Sanguine", "Venerate", "Trite", "Succinct", "Ingenious", "Meticulous", "Erudite", 
  "Bolster", "Anachronism", "Trivial", "Advocate", "Conspicuous", "Innocuous", "Audacious", 
  "Tumultuous", "Reticent", "Fervid", "Enervate", "Prodigal", "Auspicious", "Soporific", "Engender", 
  "Loquacious", "Equivocate", "Inimical", "Superfluous", "Fastidious", "Recalcitrant", "Ephemeral", 
  "Pusillanimous", "Vacillate", "Ambivalent", "Enigma", "Euphoric", "Pedant", "Profound", "Inchoate", 
  "Lethargic", "Deride"
];

export const WORD_DATA: Map<string, WordData> = new Map([
  ["Laconic", {
    word: "Laconic",
    type: "adjective",
    pronunciation: "/ləˈkɒnɪk/",
    definition: "brief and to the point.",
    example: "Jessica is so talkative that her sister thought the situation warranted conciseness, and her being laconic."
  }],
  ["Insipid", {
    word: "Insipid",
    type: "adjective",
    pronunciation: "/ɪnˈsɪpɪd/",
    definition: "lacking taste or flavor.",
    example: "Too much sugar tends to make this otherwise delightful fruit pie insipid."
  }],
  ["Pragmatic", {
    word: "Pragmatic",
    type: "adjective",
    pronunciation: "/præɡˈmætɪk/",
    definition: "concerned with practical matters.",
    example: "After five years of war, both sides have found pragmatic ways to make peace."
  }],
  ["Iconoclast", {
    word: "Iconoclast",
    type: "noun",
    pronunciation: "/aɪˈkɒnəklæst/",
    definition: "someone who attacks cherished beliefs or institutions.",
    example: "His deeds as an iconoclast will be treated harshly and judged in court."
  }],
  ["Arduous", {
    word: "Arduous",
    type: "adjective",
    pronunciation: "/ˈɑːrdjuəs/",
    definition: "difficult to accomplish.",
    example: "Months of arduous GRE preparation finally paid off."
  }],
  ["Profligate", {
    word: "Profligate",
    type: "adjective",
    pronunciation: "/ˈprɒflɪɡət/",
    definition: "recklessly extravagant or wasteful.",
    example: "The senate is perturbed over our profligate use of natural resources."
  }],
  ["Prosaic", {
    word: "Prosaic",
    type: "adjective",
    pronunciation: "/prəʊˈzeɪɪk/",
    definition: "dull; lacking excitement.",
    example: "The project was full of prosaic ideas."
  }],
  ["Ameliorate", {
    word: "Ameliorate",
    type: "verb",
    pronunciation: "/əˈmiːliəreɪt/",
    definition: "make or become better.",
    example: "Awareness programs would ameliorate rising pollution levels."
  }],
  ["Obsequious", {
    word: "Obsequious",
    type: "adjective",
    pronunciation: "/əbˈsiːkwiəs/",
    definition: "overly obedient or attentive.",
    example: "His obsequious manner revealed his intentions to flatter his boss."
  }],
  ["Capricious", {
    word: "Capricious",
    type: "adjective",
    pronunciation: "/kəˈprɪʃəs/",
    definition: "unpredictable; impulsive.",
    example: "The recession showed how capricious policy changes can harm the economy."
  }],
  ["Fortuitous", {
    word: "Fortuitous",
    type: "adjective",
    pronunciation: "/fɔːˈtjuːɪtəs/",
    definition: "happening by chance.",
    example: "The alignment timing proved scientifically fortuitous."
  }],
  ["Orthodox", {
    word: "Orthodox",
    type: "adjective",
    pronunciation: "/ˈɔːθədɒks/",
    definition: "adhering to traditional beliefs.",
    example: "Alice grew up in a conservative Orthodox community."
  }],
  ["Alacrity", {
    word: "Alacrity",
    type: "noun",
    pronunciation: "/əˈlækrɪti/",
    definition: "cheerful readiness.",
    example: "Jenny rushed off with alacrity to visit her parents."
  }],
  ["Pellucid", {
    word: "Pellucid",
    type: "adjective",
    pronunciation: "/pəˈluːsɪd/",
    definition: "crystal clear.",
    example: "The river was so pellucid that Mary could see the fishes."
  }],
  ["Corroborate", {
    word: "Corroborate",
    type: "verb",
    pronunciation: "/kəˈrɒbəreɪt/",
    definition: "confirm or support.",
    example: "The misconduct allegations were corroborated by CCTV footage."
  }],
  ["Magnanimous", {
    word: "Magnanimous",
    type: "adjective",
    pronunciation: "/mæɡˈnænɪməs/",
    definition: "very generous or forgiving.",
    example: "Her magnanimous loyalty to her nation was widely admired."
  }],
  ["Scrupulous", {
    word: "Scrupulous",
    type: "adjective",
    pronunciation: "/ˈskruːpjʊləs/",
    definition: "extremely careful; thorough.",
    example: "The owner was ordered to maintain scrupulous hygiene."
  }],
  ["Prolific", {
    word: "Prolific",
    type: "adjective",
    pronunciation: "/prəˈlɪfɪk/",
    definition: "highly productive.",
    example: "Ryan is furiously prolific, releasing multiple albums."
  }],
  ["Dogmatic", {
    word: "Dogmatic",
    type: "adjective",
    pronunciation: "/dɒɡˈmætɪk/",
    definition: "dictatorial; opinionated.",
    example: "John was dogmatic and removed his coat immediately."
  }],
  ["Placate", {
    word: "Placate",
    type: "verb",
    pronunciation: "/pləˈkeɪt/",
    definition: "make someone less angry.",
    example: "Sam worked at an unsustainable pace to placate shareholders."
  }],
  ["Mercurial", {
    word: "Mercurial",
    type: "adjective",
    pronunciation: "/mɜːˈkjʊəriəl/",
    definition: "unpredictable in mood.",
    example: "The senator was mercurial, frequently changing positions."
  }],
  ["Exacerbate", {
    word: "Exacerbate",
    type: "verb",
    pronunciation: "/ɪɡˈzæsəbeɪt/",
    definition: "make worse.",
    example: "Increasing hives could exacerbate habitat issues."
  }],
  ["Redundant", {
    word: "Redundant",
    type: "adjective",
    pronunciation: "/rɪˈdʌndənt/",
    definition: "unnecessary; superfluous.",
    example: "Tests may seem redundant but are necessary for admissions."
  }],
  ["Hackneyed", {
    word: "Hackneyed",
    type: "adjective",
    pronunciation: "/ˈhæknid/",
    definition: "overused; unoriginal.",
    example: "Marrying a prince was already a hackneyed notion."
  }],
  ["Prudent", {
    word: "Prudent",
    type: "adjective",
    pronunciation: "/ˈpruːdənt/",
    definition: "careful; wise.",
    example: "The manufacturer prudently destroyed all boxes."
  }],
  ["Belie", {
    word: "Belie",
    type: "verb",
    pronunciation: "/bɪˈlaɪ/",
    definition: "contradict; disguise.",
    example: "Joe's cheerful tone belies the grim nature of her life."
  }],
  ["Esoteric", {
    word: "Esoteric",
    type: "adjective",
    pronunciation: "/ˌesəˈterɪk/",
    definition: "understood by few.",
    example: "He submitted an esoteric mathematical thesis."
  }],
  ["Cacophony", {
    word: "Cacophony",
    type: "noun",
    pronunciation: "/kəˈkɒfəni/",
    definition: "harsh mixture of sounds.",
    example: "The cacophony around the multi‑billion buyout shook the tech industry."
  }],
  ["Impetuous", {
    word: "Impetuous",
    type: "adjective",
    pronunciation: "/ɪmˈpetjuəs/",
    definition: "acting without thought.",
    example: "Michael is methodical, never impetuous."
  }],
  ["Idiosyncrasy", {
    word: "Idiosyncrasy",
    type: "noun",
    pronunciation: "/ˌɪdiəˈsɪŋkrəsi/",
    definition: "unique trait.",
    example: "Each technology has its own idiosyncrasies."
  }],
  ["Extant", {
    word: "Extant",
    type: "adjective",
    pronunciation: "/ˈekstənt/",
    definition: "still in existence.",
    example: "Several Shakespeare works remain extant."
  }],
  ["Obscure", {
    word: "Obscure",
    type: "adjective",
    pronunciation: "/əbˈskjʊə/",
    definition: "unclear; unknown.",
    example: "Apple Maps gave obscure directions."
  }],
  ["Didactic", {
    word: "Didactic",
    type: "adjective",
    pronunciation: "/daɪˈdæktɪk/",
    definition: "educational; instructional.",
    example: "Rama's story is didactic and powerful."
  }],
  ["Pithy", {
    word: "Pithy",
    type: "adjective",
    pronunciation: "/ˈpɪθi/",
    definition: "concise and meaningful.",
    example: "The professor's comments were always pithy."
  }],
  ["Copious", {
    word: "Copious",
    type: "adjective",
    pronunciation: "/ˈkəʊpiəs/",
    definition: "abundant.",
    example: "Sophie tracked expenses in copious account books."
  }],
  ["Ostentatious", {
    word: "Ostentatious",
    type: "adjective",
    pronunciation: "/ˌɒstenˈteɪʃəs/",
    definition: "showy; pretentious.",
    example: "He was ticketed for driving ostentatiously."
  }],
  ["Adulterate", {
    word: "Adulterate",
    type: "verb",
    pronunciation: "/əˈdʌltəreɪt/",
    definition: "degrade by adding inferior substances.",
    example: "I would never adulterate green tea with sugar."
  }],
  ["Vociferous", {
    word: "Vociferous",
    type: "adjective",
    pronunciation: "/vəˈsɪfərəs/",
    definition: "loud and forceful.",
    example: "Protesters were vociferous in their demands."
  }],
  ["Taciturn", {
    word: "Taciturn",
    type: "adjective",
    pronunciation: "/ˈtæsɪtɜːn/",
    definition: "uncommunicative.",
    example: "Some candidates stayed taciturn during interviews."
  }],
  ["Obdurate", {
    word: "Obdurate",
    type: "adjective",
    pronunciation: "/ˈɒbdjʊrət/",
    definition: "stubborn.",
    example: "The teacher couldn't stand the obdurate student."
  }],
  ["Garrulous", {
    word: "Garrulous",
    type: "adjective",
    pronunciation: "/ˈɡærələs/",
    definition: "overly talkative.",
    example: "Ryan conversed comfortably with many attendees."
  }],
  ["Misanthrope", {
    word: "Misanthrope",
    type: "noun",
    pronunciation: "/ˈmɪsənθrəʊp/",
    definition: "person who hates others.",
    example: "The old woman seemed a misanthrope, but loved her neighbors."
  }],
  ["Lionize", {
    word: "Lionize",
    type: "verb",
    pronunciation: "/ˈlaɪənaɪz/",
    definition: "treat as a celebrity.",
    example: "The retired lieutenant was lionized for his integrity."
  }],
  ["Imminent", {
    word: "Imminent",
    type: "adjective",
    pronunciation: "/ˈɪmɪnənt/",
    definition: "about to happen.",
    example: "The media predicted the actress's imminent death."
  }],
  ["Frivolous", {
    word: "Frivolous",
    type: "adjective",
    pronunciation: "/ˈfrɪvələs/",
    definition: "trivial; silly.",
    example: "His friends thought coin collecting was frivolous."
  }],
  ["Benign", {
    word: "Benign",
    type: "adjective",
    pronunciation: "/bɪˈnaɪn/",
    definition: "harmless.",
    example: "The energy drink was claimed to be benign."
  }],
  ["Dissonance", {
    word: "Dissonance",
    type: "noun",
    pronunciation: "/ˈdɪsənəns/",
    definition: "disagreement.",
    example: "Conflicting evidence created dissonance in the case."
  }],
  ["Inculpate", {
    word: "Inculpate",
    type: "verb",
    pronunciation: "/ɪnˈkʌlpeɪt/",
    definition: "blame; accuse.",
    example: "Friends offered evidence that could inculpate the killer."
  }],
  ["Docile", {
    word: "Docile",
    type: "adjective",
    pronunciation: "/ˈdəʊsaɪl/",
    definition: "submissive; compliant.",
    example: "A trained lion appears docile but is fierce."
  }],
  ["Sporadic", {
    word: "Sporadic",
    type: "adjective",
    pronunciation: "/spəˈrædɪk/",
    definition: "irregular; infrequent.",
    example: "Doctors struggled due to Tom's sporadic heartbeat."
  }],
  ["Prevaricate", {
    word: "Prevaricate",
    type: "verb",
    pronunciation: "/prɪˈværɪkeɪt/",
    definition: "avoid the truth.",
    example: "Her brother prevaricates to spare her feelings."
  }],
  ["Chicanery", {
    word: "Chicanery",
    type: "noun",
    pronunciation: "/ʃɪˈkeɪnəri/",
    definition: "trickery; deception.",
    example: "The judge suspected chicanery from the lawyer."
  }],
  ["Gainsay", {
    word: "Gainsay",
    type: "verb",
    pronunciation: "/ɡeɪnˈseɪ/",
    definition: "deny; contradict.",
    example: "They couldn't gainsay the project since it came from them."
  }],
  ["Eulogy", {
    word: "Eulogy",
    type: "noun",
    pronunciation: "/ˈjuːlədʒi/",
    definition: "high praise.",
    example: "Officials joined in a chorus of eulogy."
  }],
  ["Belligerent", {
    word: "Belligerent",
    type: "adjective",
    pronunciation: "/bɪˈlɪdʒərənt/",
    definition: "hostile; aggressive.",
    example: "Russia's statement was belligerent."
  }],
  ["Dispassionate", {
    word: "Dispassionate",
    type: "adjective",
    pronunciation: "/dɪsˈpæʃənət/",
    definition: "impartial; unemotional.",
    example: "The monarch seemed dispassionate to people's suffering."
  }],
  ["Providential", {
    word: "Providential",
    type: "adjective",
    pronunciation: "/ˌprɒvɪˈdenʃəl/",
    definition: "fortunate; timely.",
    example: "Sam's providential escape left her trembling."
  }],
  ["Diffidence", {
    word: "Diffidence",
    type: "noun",
    pronunciation: "/ˈdɪfɪdəns/",
    definition: "shyness; lack of confidence.",
    example: "Many sportsmen show diffidence toward fame."
  }],
  ["Fractious", {
    word: "Fractious",
    type: "adjective",
    pronunciation: "/ˈfrækʃəs/",
    definition: "irritable; quarrelsome.",
    example: "Powers hesitated due to fractious foreign politics."
  }],
  ["Malign", {
    word: "Malign",
    type: "adjective",
    pronunciation: "/məˈlaɪn/",
    definition: "harmful.",
    example: "Families blamed malign spirits for disorders."
  }],
  ["Disparate", {
    word: "Disparate",
    type: "adjective",
    pronunciation: "/ˈdɪspərət/",
    definition: "fundamentally different.",
    example: "Their albums were disparate yet united subtly."
  }],
  ["Plausible", {
    word: "Plausible",
    type: "adjective",
    pronunciation: "/ˈplɔːzəbl/",
    definition: "believable; reasonable.",
    example: "Life on the planet seemed plausible."
  }],
  ["Sanguine", {
    word: "Sanguine",
    type: "adjective",
    pronunciation: "/ˈsæŋɡwɪn/",
    definition: "optimistic.",
    example: "Some remain sanguine about economic revival."
  }],
  ["Venerate", {
    word: "Venerate",
    type: "verb",
    pronunciation: "/ˈvenəreɪt/",
    definition: "deeply respect.",
    example: "Popes venerate Vatican customs."
  }],
  ["Trite", {
    word: "Trite",
    type: "adjective",
    pronunciation: "/traɪt/",
    definition: "overused; dull.",
    example: "His movements rendered everything trite."
  }],
  ["Succinct", {
    word: "Succinct",
    type: "adjective",
    pronunciation: "/səkˈsɪŋkt/",
    definition: "brief; clear.",
    example: "Succinct equations define wave theory."
  }],
  ["Ingenious", {
    word: "Ingenious",
    type: "adjective",
    pronunciation: "/ɪnˈdʒiːniəs/",
    definition: "clever; inventive.",
    example: "A thesis is useless if experts aren't consulted."
  }],
  ["Meticulous", {
    word: "Meticulous",
    type: "adjective",
    pronunciation: "/məˈtɪkjʊləs/",
    definition: "extremely careful.",
    example: "Cleopatra's monuments reflected meticulous work."
  }],
  ["Erudite", {
    word: "Erudite",
    type: "adjective",
    pronunciation: "/ˈerʊdaɪt/",
    definition: "scholarly; learned.",
    example: "Jane became an erudite, self‑educated woman."
  }],
  ["Bolster", {
    word: "Bolster",
    type: "verb",
    pronunciation: "/ˈbəʊlstə/",
    definition: "support; strengthen.",
    example: "New policies will bolster student borrower protections."
  }],
  ["Anachronism", {
    word: "Anachronism",
    type: "noun",
    pronunciation: "/əˈnækrənɪzəm/",
    definition: "something out of its time.",
    example: "UN power can seem like an anachronism."
  }],
  ["Trivial", {
    word: "Trivial",
    type: "adjective",
    pronunciation: "/ˈtrɪviəl/",
    definition: "of little importance.",
    example: "$10 was trivial to the businessman."
  }],
  ["Advocate", {
    word: "Advocate",
    type: "noun",
    pronunciation: "/ˈædvəkeɪt/",
    definition: "supporter.",
    example: "Mr. Sam advocates strong basics and practice."
  }],
  ["Conspicuous", {
    word: "Conspicuous",
    type: "adjective",
    pronunciation: "/kənˈspɪkjuəs/",
    definition: "obvious; noticeable.",
    example: "Taxes discourage conspicuous consumption."
  }],
  ["Innocuous", {
    word: "Innocuous",
    type: "adjective",
    pronunciation: "/ɪˈnɒkjuəs/",
    definition: "harmless.",
    example: "Companies claimed data was innocuous."
  }],
  ["Audacious", {
    word: "Audacious",
    type: "adjective",
    pronunciation: "/ɔːˈdeɪʃəs/",
    definition: "daring; bold.",
    example: "Jim's audacious style thrilled audiences."
  }],
  ["Tumultuous", {
    word: "Tumultuous",
    type: "adjective",
    pronunciation: "/tjuːˈmʌltjuəs/",
    definition: "chaotic; disorderly.",
    example: "The crowd was tumultuous during riots."
  }],
  ["Reticent", {
    word: "Reticent",
    type: "adjective",
    pronunciation: "/ˈretɪsənt/",
    definition: "reserved; quiet.",
    example: "The Swiss bank was unusually reticent."
  }],
  ["Fervid", {
    word: "Fervid",
    type: "adjective",
    pronunciation: "/ˈfɜːvɪd/",
    definition: "intensely passionate.",
    example: "Candidates hurled fervid accusations."
  }],
  ["Enervate", {
    word: "Enervate",
    type: "verb",
    pronunciation: "/ˈenəveɪt/",
    definition: "weaken.",
    example: "The blazing heat enervated the crew."
  }],
  ["Prodigal", {
    word: "Prodigal",
    type: "adjective",
    pronunciation: "/ˈprɒdɪɡəl/",
    definition: "wastefully extravagant.",
    example: "Scott was prodigal with energy and resources."
  }],
  ["Auspicious", {
    word: "Auspicious",
    type: "adjective",
    pronunciation: "/ɔːˈspɪʃəs/",
    definition: "favorable.",
    example: "The skipper saw the forecast as auspicious."
  }],
  ["Soporific", {
    word: "Soporific",
    type: "adjective",
    pronunciation: "/ˌsɒpəˈrɪfɪk/",
    definition: "sleep‑inducing.",
    example: "Reality shows tend to be soporific."
  }],
  ["Engender", {
    word: "Engender",
    type: "verb",
    pronunciation: "/ɪnˈdʒendə/",
    definition: "produce; cause.",
    example: "New technology engendered great hope."
  }],
  ["Loquacious", {
    word: "Loquacious",
    type: "adjective",
    pronunciation: "/ləʊˈkweɪʃəs/",
    definition: "talkative.",
    example: "Julie and Katie were very loquacious."
  }],
  ["Equivocate", {
    word: "Equivocate",
    type: "verb",
    pronunciation: "/ɪˈkwɪvəkeɪt/",
    definition: "avoid direct answer.",
    example: "She equivocated when asked about the suit."
  }],
  ["Inimical", {
    word: "Inimical",
    type: "adjective",
    pronunciation: "/ɪˈnɪmɪkəl/",
    definition: "harmful; hostile.",
    example: "Sarah's husband was inimical and violent."
  }],
  ["Superfluous", {
    word: "Superfluous",
    type: "adjective",
    pronunciation: "/suːˈpɜːfluəs/",
    definition: "unnecessary; excessive.",
    example: "Marketing budgets may seem superfluous but are essential."
  }],
  ["Fastidious", {
    word: "Fastidious",
    type: "adjective",
    pronunciation: "/fæˈstɪdiəs/",
    definition: "very attentive.",
    example: "They were fastidious while cleaning up."
  }],
  ["Recalcitrant", {
    word: "Recalcitrant",
    type: "adjective",
    pronunciation: "/rɪˈkælsɪtrənt/",
    definition: "stubborn; disobedient.",
    example: "Politicians were punished for being recalcitrant."
  }],
  ["Ephemeral", {
    word: "Ephemeral",
    type: "adjective",
    pronunciation: "/ɪˈfemərəl/",
    definition: "short‑lived.",
    example: "Sophie knew the relationship was ephemeral."
  }],
  ["Pusillanimous", {
    word: "Pusillanimous",
    type: "adjective",
    pronunciation: "/ˌpjuːsɪˈlænɪməs/",
    definition: "cowardly.",
    example: "The captain led a pusillanimous retreat."
  }],
  ["Vacillate", {
    word: "Vacillate",
    type: "verb",
    pronunciation: "/ˈvæsɪleɪt/",
    definition: "waver; be indecisive.",
    example: "Adam vacillated between vacation and studying."
  }],
  ["Ambivalent", {
    word: "Ambivalent",
    type: "adjective",
    pronunciation: "/æmˈbɪvələnt/",
    definition: "mixed feelings.",
    example: "She felt ambivalent about Shelly."
  }],
  ["Enigma", {
    word: "Enigma",
    type: "noun",
    pronunciation: "/ɪˈnɪɡmə/",
    definition: "mysterious.",
    example: "Bruce Wayne was an enigma to many."
  }],
  ["Euphoric", {
    word: "Euphoric",
    type: "adjective",
    pronunciation: "/juːˈfɒrɪk/",
    definition: "extremely happy.",
    example: "Players were euphoric after receiving bonuses."
  }],
  ["Pedant", {
    word: "Pedant",
    type: "noun",
    pronunciation: "/ˈpedənt/",
    definition: "someone focused on minor details.",
    example: "The professor was a pedant."
  }],
  ["Profound", {
    word: "Profound",
    type: "adjective",
    pronunciation: "/prəˈfaʊnd/",
    definition: "deep; intense.",
    example: "Pressures forced a profound reassessment."
  }],
  ["Inchoate", {
    word: "Inchoate",
    type: "adjective",
    pronunciation: "/ɪnˈkəʊeɪt/",
    definition: "undeveloped.",
    example: "After the big bang, matter was inchoate."
  }],
  ["Lethargic", {
    word: "Lethargic",
    type: "adjective",
    pronunciation: "/lɪˈθɑːdʒɪk/",
    definition: "sluggish.",
    example: "Japan's spending remained lethargic."
  }],
  ["Deride", {
    word: "Deride",
    type: "verb",
    pronunciation: "/dɪˈraɪd/",
    definition: "mock; insult.",
    example: "Patriots derided the idea as a mistake."
  }]
]);