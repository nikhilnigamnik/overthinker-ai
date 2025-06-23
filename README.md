# OverthinkerAI 🤔

Turn your simple questions into dramatic, philosophical spirals. Because sometimes you need to externalize your inner anxious thoughts.

## About

OverthinkerAI is a fun, AI-powered web application that takes your everyday questions and transforms them into relatable overthinking responses. Whether you're wondering about going to a party, texting someone back, or making a life decision, OverthinkerAI will help you explore the depths of your thoughts with a touch of humor and existential drama.

## Features

- **AI-Powered Overthinking**: Uses OpenAI's GPT-4o to generate natural, relatable overthinking responses
- **Real-time Streaming**: Responses are streamed in real-time for a smooth user experience
- **Simple Interface**: Clean, modern UI built with Next.js and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Daily Inspiration**: Features a "Daily Overthinker" quote for extra existential fuel

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4o via AI SDK
- **UI Components**: Radix UI + custom components
- **Icons**: Lucide React

## Getting Started

### Prerequisites

1. **Node.js**: Make sure you have Node.js 18+ installed
2. **OpenAI API Key**: You'll need an OpenAI API key to use this application. Get one from [OpenAI's platform](https://platform.openai.com/api-keys).

### Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
   cd overthinker-ai
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your OpenAI API key:

   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

1. **Enter your question**: Type any question you're overthinking about
2. **Click "Overthink"**: Watch as the AI transforms your simple question into a philosophical spiral
3. **Enjoy the existential crisis**: Read your personalized overthinking response

### Example Questions to Try

- "Should I go to this party?"
- "Should I text them back?"
- "Should I quit my job?"
- "What if I'm not good enough?"
- "Should I order pizza or cook dinner?"

## Development

### Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Project Structure

```
overthinker-ai/
├── app/                    # Next.js App Router
│   ├── api/generate/      # AI generation endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page component
├── components/            # Reusable UI components
│   ├── layout/           # Layout components
│   └── ui/               # Base UI components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Deployment

The easiest way to deploy your OverthinkerAI app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your project to Vercel
3. Add your `OPENAI_API_KEY` environment variable
4. Deploy!

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for:

- Bug fixes
- New features
- UI/UX improvements
- Performance optimizations

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [OpenAI](https://openai.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

_Remember: Sometimes the best way to stop overthinking is to let an AI do it for you._ 😉
