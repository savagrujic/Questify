const quests = [
    // === PHYSICAL QUESTS ===
    {
      name: "Jog Master",
      description: "Run 5 kilometers in 30 minutes",
      xp: 50,
      category: "Physical",
      type: "Exercise",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Stretch Starter",
      description: "Do a 15-minute full-body stretch",
      xp: 25,
      category: "Physical",
      type: "Mobility",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Core Crusher",
      description: "Complete a 10-minute ab workout",
      xp: 30,
      category: "Physical",
      type: "Strength",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Upper Beast",
      description: "Do 3 sets of 10 push-ups",
      xp: 25,
      category: "Physical",
      type: "Strength",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Lower Power",
      description: "Do 3 sets of 15 squats",
      xp: 25,
      category: "Physical",
      type: "Strength",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Cardio Champ",
      description: "Jump rope for 5 minutes straight",
      xp: 35,
      category: "Physical",
      type: "Cardio",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Zen Warrior",
      description: "Do 20 minutes of yoga",
      xp: 40,
      category: "Physical",
      type: "Mobility",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Mountain Climber",
      description: "Do 3 sets of 30 mountain climbers",
      xp: 35,
      category: "Physical",
      type: "Cardio",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Plank Pro",
      description: "Hold a 2-minute plank",
      xp: 30,
      category: "Physical",
      type: "Core",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
    {
      name: "Sweat Session",
      description: "Do a 30-minute full-body workout",
      xp: 60,
      category: "Physical",
      type: "Exercise",
      difficulty: "Hard",
      completed: false,
      deadline: 0,
      color: 'bg-green-200'
    },
  
    // === MENTAL HEALTH QUESTS ===
    {
      name: "Read & Recharge",
      description: "Read a book for 30 minutes",
      xp: 40,
      category: "Mental",
      type: "Learning",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Meditation Moment",
      description: "Meditate for 10 minutes",
      xp: 30,
      category: "Mental",
      type: "Mindfulness",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Gratitude Journal",
      description: "Write down 3 things you're grateful for",
      xp: 20,
      category: "Mental",
      type: "Reflection",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Digital Detox",
      description: "Avoid screens for 1 hour",
      xp: 35,
      category: "Mental",
      type: "Focus",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Mind Cleanse",
      description: "Do a brain dump journaling session for 10 minutes",
      xp: 30,
      category: "Mental",
      type: "Reflection",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Learn-a-Thing",
      description: "Watch a 10-minute educational video",
      xp: 25,
      category: "Mental",
      type: "Learning",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Vision Builder",
      description: "Write 5 goals you want to achieve this year",
      xp: 40,
      category: "Mental",
      type: "Planning",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Affirmation Time",
      description: "Say 5 positive affirmations out loud",
      xp: 20,
      category: "Mental",
      type: "Confidence",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Silent Hour",
      description: "Spend 1 hour in silence and reflection",
      xp: 50,
      category: "Mental",
      type: "Mindfulness",
      difficulty: "Hard",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
    {
      name: "Sleep Prep",
      description: "Do a relaxing night routine before bed",
      xp: 30,
      category: "Mental",
      type: "Wellness",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-purple-200'
    },
  
    // === SOCIAL QUESTS ===
    {
      name: "Friendly Start",
      description: "Say good morning to 10 people",
      xp: 30,
      category: "Social",
      type: "Communication",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Call a Buddy",
      description: "Call a friend or family member just to chat",
      xp: 40,
      category: "Social",
      type: "Connection",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Smile Mission",
      description: "Make 3 people smile today",
      xp: 30,
      category: "Social",
      type: "Kindness",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Social Compliment",
      description: "Give a genuine compliment to 5 people",
      xp: 35,
      category: "Social",
      type: "Confidence",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Conversation Starter",
      description: "Start a conversation with a stranger",
      xp: 50,
      category: "Social",
      type: "Courage",
      difficulty: "Hard",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Support Check",
      description: "Ask a friend how they're really doing",
      xp: 40,
      category: "Social",
      type: "Empathy",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Group Vibes",
      description: "Join a group activity or event",
      xp: 50,
      category: "Social",
      type: "Engagement",
      difficulty: "Hard",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Thank You Quest",
      description: "Send a thank-you message to someone",
      xp: 25,
      category: "Social",
      type: "Gratitude",
      difficulty: "Easy",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Help Out",
      description: "Do a random act of kindness for someone",
      xp: 40,
      category: "Social",
      type: "Kindness",
      difficulty: "Medium",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    },
    {
      name: "Team Player",
      description: "Work with someone on a task or goal",
      xp: 45,
      category: "Social",
      type: "Teamwork",
      difficulty: "Hard",
      completed: false,
      deadline: 0,
      color: 'bg-blue-200'
    }
  ];
