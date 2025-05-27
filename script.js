  const dialogos = [
        { texto: 'Você não pensa em apenas dizer foda-se para tudo isso?', cor: 'roxo' },
        { texto: 'Sempre segui o que minha mãe disse...', cor: 'vermelho' },
        { texto: 'Mas isso é ser omisso...', cor: 'roxo' },
        { texto: 'SUA MÃE MORREU DE EXAUSTÃO POR AJUDAR TUDO E TODOS EM SEU CAMINHO!', cor: 'roxo' },
        { texto: 'Se ela tivesse me escolhido, eu não teria que viver tão sozinho...', cor: 'vermelho' },
        { texto: '...', cor: 'vermelho' },
        { texto: 'MAS ISSO É GENTILEZA!', cor: 'vermelho' },
        { texto: 'na verdade isso é fraqueza.', cor: 'roxo' },
        { texto: 'Você não poderia entender, não tem amor à vida dos outros.', cor: 'vermelho' },
        { texto: 'Por acaso sua dor ainda consegue suportar?', cor: 'roxo' },
        { texto: '...', cor: 'vermelho' },
        { texto: 'SUA DOR AINDA CONSEGUE SUPORTAR?', cor: 'roxo' },
        { texto: 'NÃO CONSIGO', cor: 'vermelho' },
        { texto: 'ALGUÉM COMO ELE PODE PERDOAR?', cor: 'roxo' },
        { texto: 'NÃO CONSIGO.', cor: 'vermelho' },
        { texto: 'TE DEVORAR É TE SUPERAR E ACEITAR O QUE EU SOU; EU SOU UM GHOUL.', cor: 'vermelho' },
        { texto: 'EU SOU UM GHOUL.', cor: 'vermelho' },
        { texto: 'EU SOU UM GHOUL.', cor: 'vermelho' },
        { texto: 'EU SOU UM GHOUL.', cor: 'vermelho' }
      ];

      let index = 0;
      let started = false;

      document.body.addEventListener('click', () => {
        if (!started) {
          document.getElementById('conteudo').classList.add('fade-out');
          setTimeout(() => {
            document.getElementById('conteudo').style.display = 'none';
            document.getElementById('dialogos').classList.remove('hidden');
            mostrarDialogo();
          }, 2000);
          started = true;
        } else if (index >= dialogos.length) {
          document.getElementById('dialogos').classList.add('fade-out');
          setTimeout(() => {
            document.getElementById('dialogos').style.display = 'none';
            document.getElementById('final-branco').classList.remove('hidden');
            document.getElementById('resetar').classList.remove('hidden');
          }, 2000);
        } else {
          mostrarDialogo();
        }
      });

      document.getElementById('resetar').addEventListener('click', () => {
        location.reload();
      });

      function mostrarDialogo() {
        const d = dialogos[index];
        const dialogoDiv = document.getElementById('dialogos');
        dialogoDiv.innerHTML = `<p class="${d.cor === 'roxo' ? 'dialogo-roxo' : 'dialogo-vermelho'}">${d.texto}</p>`;
        document.body.classList.add('brutal');
        setTimeout(() => {
          document.body.classList.remove('brutal');
        }, 500 + index * 50);
        index++;
      }

      tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        background: { color: { value: "#1a0000" } },
        particles: {
          number: { value: 100 },
          color: { value: ["#ff0000", "#660000"] },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1, direction: "none", outModes: "bounce" }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        }
      });