export type Locale = 'es' | 'en';

export const translations = {
  es: {
    seo: {
      title: "Dilix — El entorno de terminal definitivo con IA local y Dotfiles",
      description: "Un stack moderno preconfigurado con WezTerm, Starship, Zsh modular y Dilix (asistente de IA local con Ollama sin costo de tokens ni telemetría). Listo en 1 comando para macOS, CachyOS, Ubuntu y WSL2.",
    },
    nav: {
      features: "Características",
      demo: "Terminal Demo",
      installation: "Instalación",
      faq: "FAQ",
      installNow: "Instalar Ahora",
      starGitHub: "Star",
    },
    hero: {
      tagline: "Ecosistema de Terminal Inteligente & Dotfiles Multiplataforma",
      titlePart1: "El entorno de terminal definitivo:",
      titlePart2: "IA local, velocidad absurda y diseño impecable.",
      subtitle: "Un stack moderno preconfigurado con WezTerm, Starship, Zsh modular y Dilix (asistente de IA local con Ollama sin costo de tokens ni telemetría). Listo en 1 comando para macOS, CachyOS, Ubuntu y WSL2.",
      copyBtn: "Copiar Comando",
      copied: "¡Copiado al portapapeles!",
      osNotice: "Detecta automáticamente tu SO: macOS, CachyOS, Ubuntu o WSL2. Crea backups limpios.",
      tryDemo: "Probar Terminal Interactivo",
      viewOptions: "Ver Opciones y Flags",
      terminalTitle: "~/dotfiles — wezterm (Tokyo Night)",
      localAi: "Local AI",
      askQuery: "como listar puertos en escucha y matar el proceso en el puerto 3000",
      askLatency: "Generado en 240ms • 0 API tokens",
      askExplanation: "Para encontrar y terminar el proceso que ocupa el puerto 3000 de manera segura:",
      askSuggested: "[Acción sugerida]",
      btnRun: "[E]jecutar",
      btnPrompt: "[P]rompt",
      btnCopy: "[C]opiar",
    },
    osBadges: {
      header: "Arquitectura Multiplataforma Nativa • Cero scripts genéricos",
      platforms: [
        {
          name: "macOS",
          flag: "--macos --es",
          badge: "Apple Silicon & Intel",
          desc: "19 logos dinámicos Fastfetch, Homebrew y WezTerm con desenfoque nativo.",
        },
        {
          name: "CachyOS",
          flag: "--cachyos --es",
          badge: "Arch Optimized",
          desc: "Paru/Pacman optimizado, detección automática de aceleración GPU (CUDA/ROCm) para Ollama.",
        },
        {
          name: "Ubuntu",
          flag: "--ubuntu --es",
          badge: "Debian & LTS",
          desc: "Soporte APT desatendido, PPA modernos para eza, bat, fzf y fastfetch sin dependencias rotas.",
        },
        {
          name: "WSL2",
          flag: "--wsl2 --es",
          badge: "Windows Interop",
          desc: "Generación automática del puente .wezterm.lua en %USERPROFILE% y portapapeles nativo con clip.exe.",
        },
      ],
    },
    bento: {
      eyebrow: "Arquitectura & Propuesta de Valor",
      title: "Construido para desarrolladores que exigen",
      titleGradient: "velocidad y privacidad",
      subtitle: "Cada herramienta seleccionada e integrada resuelve un dolor diario de la línea de comandos. Sin sobrecarga innecesaria.",
      c1: {
        tag: "01 • FEATURE PRINCIPAL",
        status: "100% Offline & Privado",
        title: "🧠 Dilix: Copiloto de IA Local",
        desc: "100% privado, sin suscripciones mensuales ni claves de API que expirar. Corre sobre el motor local Ollama (qwen2.5-coder:1.5b). Responde dudas de código, explica arquitecturas y sugiere comandos de terminal complejos en milisegundos con cero telemetría.",
        engine: "Motor: Ollama Client IPC",
        ram: "Consumo RAM: < 1.8 GB",
        query: "$ dilix \"explicar cómo funciona el kernel namespace en contenedores\"",
        output: "Los namespaces de Linux aíslan recursos (PID, Red, Mount, IPC) para que los procesos de un contenedor operen en entornos virtuales independientes...",
      },
      c2: {
        tag: "02 • FIX INSTANTÁNEO",
        title: "⚡ Autodiagnóstico Inteligente",
        desc: "¿Un comando falló con un error críptico? No abras el navegador. Presiona Ctrl+G o ejecuta fix: Dilix analiza el código de salida y el historial para darte la causa exacta y la solución en 1 clic.",
      },
      c3: {
        tag: "03 • UI / UX",
        title: "🎨 Estética Visual Premium",
        desc: "WezTerm configurado con desenfoque nativo y paleta Tokyo Night. Starship Prompt responsivo con Nerd Fonts v3.2 y Fastfetch con detección dinámica de logos del sistema.",
      },
      c4: {
        tag: "04 • INTEROPERABILIDAD",
        title: "🌍 Soporte Nativo 4-en-1",
        desc: "No es un bash script genérico. Aliases dedicados para pacman/paru en CachyOS, apt en Ubuntu, brew en macOS y sincronización de portapapeles con clip.exe en WSL2.",
      },
      c5: {
        tag: "05 • PLUGINS & EXTENSIBILIDAD",
        title: "🧩 Zsh Modular & Zinit",
        desc: "Plugin nativo estándar (dilix.plugin.zsh) con autocompletado inteligente (_dilix) compatible con Oh-My-Zsh, Zinit y vanilla Zsh. Cero tiempo de arranque extra en tu shell.",
      },
    },
    demo: {
      eyebrow: "Simulador en Vivo",
      title: "Pruébalo ahora en tu navegador",
      subtitle: "Haz clic en cualquiera de los comandos predeterminados para experimentar cómo responde Dilix en tu terminal real.",
      btnAsk: "ask \"archivos hoy\"",
      btnFix: "fix (Diagnóstico)",
      btnMenu: "dilix menu",
      btnFf: "ff (Fastfetch)",
      btnClear: "clear",
      copyOutput: "Copiar",
      copied: "¡Copiado!",
      inputPlaceholder: "Escribe 'ask ...', 'fix', 'menu', 'ff' o presiona Enter...",
      enterHint: "[Enter para ejecutar]",
    },
    install: {
      eyebrow: "Guía de Instalación",
      title: "Configura tu terminal en",
      titleGradient: "menos de 2 minutos",
      subtitle: "Elige si deseas transformar tu entorno completo con la Suite de Dotfiles o si prefieres incorporar únicamente el plugin de IA en tu configuración existente.",
      btnFull: "🚀 Método 1: Suite Completa (Recomendado)",
      btnPlugin: "🧩 Método 2: Solo Plugin Zsh",
      tabAuto: "⚡ Detección Automática (Universal)",
      tabMacos: "macOS",
      tabCachyos: "CachyOS (Arch)",
      tabUbuntu: "Ubuntu / Debian",
      tabWsl2: "WSL2 (Windows)",
      copyBtn: "Copiar Comando",
      copied: "¡Copiado!",
      whatHappensTitle: "¿Qué experimenta el usuario durante este proceso?",
      step1Title: "1. Detección Inteligente del SO",
      step1Desc: "Identifica el sistema y los gestores de paquetes activos (brew, pacman, paru, apt) para no alterar dependencias ajenas.",
      step2Title: "2. Herramientas Modernas",
      step2Desc: "Instala sin fricción WezTerm, Starship, Atuin, Zoxide, Eza, Bat, Fzf, Fastfetch y el runtime de Ollama.",
      step3Title: "3. Puesta a punto de Dilix AI",
      step3Desc: "Descarga el modelo liviano qwen2.5-coder:1.5b, configura el idioma español y enlaza el binario en ~/.local/bin/dilix.",
      step4Title: "4. Enlaces Simbólicos Seguros",
      step4Desc: "Crea backups limpios y enlaza ~/.zshrc, ~/.config/starship.toml, ~/.wezterm.lua y ~/.config/fastfetch.",
      pluginTitle: "Solo el Plugin de Zsh (Para quien ya tiene sus propios Dotfiles)",
      pluginDesc: "Si no quieres cambiar tu terminal ni tus dotfiles y únicamente deseas integrar el copiloto inteligente Dilix en tu Zsh:",
      omzTitle: "Opción A: Con Oh-My-Zsh",
      omzDesc: "Luego añade dilix a la lista de plugins en tu ~/.zshrc:",
      zinitTitle: "Opción B: Con Zinit",
      zinitDesc: "Zinit cargará de forma asíncrona y diferida las funciones ask, fix y el autocompletado _dilix.",
    },
    faq: {
      eyebrow: "Preguntas Frecuentes",
      title: "Todo lo que necesitas saber",
      subtitle: "Respuestas claras sobre privacidad, recursos del sistema y compatibilidad.",
      items: [
        {
          q: "¿Necesito una computadora con tarjeta gráfica dedicada?",
          a: "No. El modelo predeterminado qwen2.5-coder:1.5b está diseñado específicamente para ejecutarse con fluidez en procesadores estándar (CPUs convencionales) y Apple Silicon (M1/M2/M3/M4) con un consumo menor a 2 GB de memoria RAM. Si cuentas con una GPU NVIDIA o AMD en CachyOS/Ubuntu, el instalador activará aceleración CUDA/ROCm automáticamente."
        },
        {
          q: "¿Qué pasa con mis configuraciones existentes?",
          a: "El script de instalación es completamente respetuoso con tu entorno: crea backups limpios y versionados de cualquier archivo existente (~/.zshrc.bak, ~/.config/...) antes de enlazar los dotfiles. Nunca sobreescribe destructivamente tus configuraciones previas."
        },
        {
          q: "¿Puedo personalizar el modelo de IA?",
          a: "Totalmente. Dilix se comunica de forma transparente con Ollama. Puedes cambiar el modelo en cualquier momento agregando export DILIX_MODEL=\"tu-modelo\" a tu ~/.zshrc (por ejemplo: deepseek-coder:6.7b, codellama, llama3.2 o phi3)."
        },
        {
          q: "¿Qué herramientas instala exactamente la suite completa?",
          a: "Instala y optimiza WezTerm (emulador de terminal GPU-accelerated), Starship (prompt minimalista y veloz), Atuin (búsqueda e historial mágico de shell), Zoxide (navegación inteligente de directorios), Eza (sucesor moderno de ls), Bat (cat con sintaxis y git), Fzf (fuzzy finder), Fastfetch (información de sistema rápida) y Ollama para servir modelos de IA locales."
        },
        {
          q: "¿Dilix envía mis comandos o código a servidores en la nube?",
          a: "Absolutamente nada. Dilix se diseñó bajo una filosofía de privacidad total (Zero Telemetry). Todo el procesamiento de lenguaje natural y resolución de errores se realiza en tu propia máquina mediante IPC local con Ollama. Funciona incluso en modo avión."
        }
      ]
    },
    footer: {
      desc: "El entorno de terminal definitivo: IA local impulsada por Ollama, WezTerm con desenfoque nativo, Starship prompt y Zsh modular para desarrolladores de alto rendimiento.",
      navTitle: "Navegación",
      codeTitle: "Código & Repositorio",
      compat: "Compatible con macOS Sequoia, Arch / CachyOS, Ubuntu 22.04+ y WSL2 en Windows 11.",
      credits: "Diseñado y desarrollado por Danniel Navas. Código abierto bajo licencia MIT.",
    }
  },

  en: {
    seo: {
      title: "Dilix — The Ultimate Terminal Environment with Local AI & Dotfiles",
      description: "A modern preconfigured stack with WezTerm, Starship, modular Zsh, and Dilix (local AI assistant powered by Ollama with zero token cost or telemetry). Ready in 1 command for macOS, CachyOS, Ubuntu, and WSL2.",
    },
    nav: {
      features: "Features",
      demo: "Terminal Demo",
      installation: "Installation",
      faq: "FAQ",
      installNow: "Install Now",
      starGitHub: "Star",
    },
    hero: {
      tagline: "Intelligent Terminal Ecosystem & Cross-Platform Dotfiles",
      titlePart1: "The ultimate terminal environment:",
      titlePart2: "Local AI, blistering speed, and impeccable aesthetics.",
      subtitle: "A modern preconfigured stack with WezTerm, Starship, modular Zsh, and Dilix (local AI assistant with Ollama, zero token cost or telemetry). Ready in 1 command for macOS, CachyOS, Ubuntu, and WSL2.",
      copyBtn: "Copy Command",
      copied: "Copied to clipboard!",
      osNotice: "Automatically detects your OS: macOS, CachyOS, Ubuntu, or WSL2. Creates clean backups.",
      tryDemo: "Try Interactive Terminal",
      viewOptions: "View Options & Flags",
      terminalTitle: "~/dotfiles — wezterm (Tokyo Night)",
      localAi: "Local AI",
      askQuery: "how to list listening ports and kill the process on port 3000",
      askLatency: "Generated in 240ms • 0 API tokens",
      askExplanation: "To safely locate and terminate the process occupying port 3000:",
      askSuggested: "[Suggested action]",
      btnRun: "[E]xecute",
      btnPrompt: "[P]rompt",
      btnCopy: "[C]opy",
    },
    osBadges: {
      header: "Native Cross-Platform Architecture • Zero generic scripts",
      platforms: [
        {
          name: "macOS",
          flag: "--macos --en",
          badge: "Apple Silicon & Intel",
          desc: "19 dynamic Fastfetch themes, Homebrew, and WezTerm with native blur.",
        },
        {
          name: "CachyOS",
          flag: "--cachyos --en",
          badge: "Arch Optimized",
          desc: "Optimized Paru/Pacman, automatic GPU acceleration detection (CUDA/ROCm) for Ollama.",
        },
        {
          name: "Ubuntu",
          flag: "--ubuntu --en",
          badge: "Debian & LTS",
          desc: "Unattended APT setup, modern PPAs for eza, bat, fzf, and fastfetch with clean dependencies.",
        },
        {
          name: "WSL2",
          flag: "--wsl2 --en",
          badge: "Windows Interop",
          desc: "Automatic .wezterm.lua bridge in %USERPROFILE% and native clipboard integration via clip.exe.",
        },
      ],
    },
    bento: {
      eyebrow: "Architecture & Value Proposition",
      title: "Built for developers who demand",
      titleGradient: "speed and privacy",
      subtitle: "Every tool selected and tuned solves daily command line friction. No unnecessary bloat.",
      c1: {
        tag: "01 • CORE FEATURE",
        status: "100% Offline & Private",
        title: "🧠 Dilix: Local AI Copilot",
        desc: "100% private, no monthly subscriptions or expiring API keys. Runs on local Ollama (qwen2.5-coder:1.5b). Answers coding questions, explains architectures, and suggests complex terminal commands in milliseconds with zero telemetry.",
        engine: "Engine: Ollama Client IPC",
        ram: "RAM Footprint: < 1.8 GB",
        query: "$ dilix \"explain how kernel namespaces work in containers\"",
        output: "Linux namespaces isolate system resources (PID, Net, Mount, IPC) allowing containerized processes to run inside independent virtual environments...",
      },
      c2: {
        tag: "02 • INSTANT FIX",
        title: "⚡ Intelligent Self-Diagnosis",
        desc: "Command failed with a cryptic error? Don't open your browser. Press Ctrl+G or type fix: Dilix inspects the exit code and history to pinpoint the exact root cause and 1-click fix.",
      },
      c3: {
        tag: "03 • UI / UX",
        title: "🎨 Premium Visual Aesthetics",
        desc: "WezTerm preconfigured with native background blur and Tokyo Night palette. Responsive Starship Prompt with Nerd Fonts v3.2 and Fastfetch with dynamic system logos.",
      },
      c4: {
        tag: "04 • INTEROPERABILITY",
        title: "🌍 4-in-1 Native Support",
        desc: "Not a generic bash script. Dedicated aliases for pacman/paru on CachyOS, apt on Ubuntu, brew on macOS, and clipboard bridging via clip.exe on WSL2.",
      },
      c5: {
        tag: "05 • PLUGINS & EXTENSIBILITY",
        title: "🧩 Modular Zsh & Zinit",
        desc: "Standard native plugin (dilix.plugin.zsh) with smart completions (_dilix) compatible with Oh-My-Zsh, Zinit, and vanilla Zsh. Zero overhead on shell startup.",
      },
    },
    demo: {
      eyebrow: "Live Simulator",
      title: "Try it now in your browser",
      subtitle: "Click on any preset command to experience how Dilix responds in your actual terminal.",
      btnAsk: "ask \"files today\"",
      btnFix: "fix (Diagnosis)",
      btnMenu: "dilix menu",
      btnFf: "ff (Fastfetch)",
      btnClear: "clear",
      copyOutput: "Copy",
      copied: "Copied!",
      inputPlaceholder: "Type 'ask ...', 'fix', 'menu', 'ff' or press Enter...",
      enterHint: "[Press Enter to execute]",
    },
    install: {
      eyebrow: "Installation Guide",
      title: "Set up your terminal in",
      titleGradient: "under 2 minutes",
      subtitle: "Choose whether to transform your entire environment with the Dotfiles Suite or integrate just the AI plugin into your existing setup.",
      btnFull: "🚀 Method 1: Full Suite (Recommended)",
      btnPlugin: "🧩 Method 2: Zsh Plugin Only",
      tabAuto: "⚡ Automatic Detection (Universal)",
      tabMacos: "macOS",
      tabCachyos: "CachyOS (Arch)",
      tabUbuntu: "Ubuntu / Debian",
      tabWsl2: "WSL2 (Windows)",
      copyBtn: "Copy Command",
      copied: "Copied!",
      whatHappensTitle: "What will the user experience during this process?",
      step1Title: "1. Smart OS Detection",
      step1Desc: "Identifies your system and active package managers (brew, pacman, paru, apt) to preserve existing toolchains.",
      step2Title: "2. Modern Toolchain Setup",
      step2Desc: "Seamlessly installs WezTerm, Starship, Atuin, Zoxide, Eza, Bat, Fzf, Fastfetch, and the Ollama runtime.",
      step3Title: "3. Dilix AI Provisioning",
      step3Desc: "Pulls lightweight qwen2.5-coder:1.5b, configures English language, and symlinks the binary to ~/.local/bin/dilix.",
      step4Title: "4. Clean Dotfile Linking",
      step4Desc: "Creates timestamped backups and cleanly symlinks ~/.zshrc, ~/.config/starship.toml, ~/.wezterm.lua, and ~/.config/fastfetch.",
      pluginTitle: "Zsh Plugin Only (For developers with existing dotfiles)",
      pluginDesc: "If you want to keep your existing terminal configurations and only integrate the Dilix AI assistant into Zsh:",
      omzTitle: "Option A: With Oh-My-Zsh",
      omzDesc: "Then add dilix to your plugins list in ~/.zshrc:",
      zinitTitle: "Option B: With Zinit",
      zinitDesc: "Zinit will asynchronously load ask, fix, and _dilix autocompletion with zero startup lag.",
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Everything you need to know",
      subtitle: "Clear answers on privacy, system footprint, and compatibility.",
      items: [
        {
          q: "Do I need a dedicated GPU to run Dilix AI?",
          a: "No. The default model qwen2.5-coder:1.5b is specifically tuned to run lightning fast on conventional CPUs and Apple Silicon (M1/M2/M3/M4) using under 2 GB of RAM. If you do have an NVIDIA or AMD GPU on CachyOS/Ubuntu, the installer will automatically enable CUDA/ROCm acceleration."
        },
        {
          q: "What happens to my existing configurations?",
          a: "The installation script is fully non-destructive: it creates clean, timestamped backups of all existing configuration files (~/.zshrc.bak, ~/.config/...) before creating any symlinks. It will never overwrite your existing dotfiles without a backup."
        },
        {
          q: "Can I customize the local AI model?",
          a: "Yes! Dilix integrates directly with Ollama. You can switch models anytime by defining export DILIX_MODEL=\"your-model\" in your ~/.zshrc (e.g. deepseek-coder:6.7b, codellama, llama3.2, or phi3)."
        },
        {
          q: "What tools are installed by the full suite?",
          a: "It installs and configures WezTerm (GPU-accelerated terminal emulator), Starship (fast, customizable prompt), Atuin (magical shell history), Zoxide (smarter cd), Eza (modern ls replacement), Bat (cat with syntax highlighting), Fzf (fuzzy finder), Fastfetch (fast neofetch replacement), and Ollama for local LLM inference."
        },
        {
          q: "Does Dilix send my shell commands or code to cloud servers?",
          a: "Absolutely nothing is sent to the cloud. Dilix follows a strict Zero Telemetry philosophy. All natural language processing and terminal fixes happen entirely on your machine via local IPC with Ollama. It even works in airplane mode."
        }
      ]
    },
    footer: {
      desc: "The ultimate terminal environment: local AI powered by Ollama, WezTerm with native blur, Starship prompt, and modular Zsh for high-performance developers.",
      navTitle: "Navigation",
      codeTitle: "Code & Repository",
      compat: "Compatible with macOS Sequoia, Arch / CachyOS, Ubuntu 22.04+, and WSL2 on Windows 11.",
      credits: "Designed and developed by Danniel Navas. Open source under the MIT License.",
    }
  }
};
