const terminalLog = document.getElementById('terminalLog');
const suzyText = document.getElementById('suzyText');

const messages = {
  diagnostico: {
    log: '&gt; diagnóstico simulado: interface OK, módulos visuais OK, risco zero',
    suzy: 'Diagnóstico visual concluído. Nenhum arquivo foi lido, movido ou apagado.'
  },
  purgex: {
    log: '&gt; PurgeX simulado: pré-visualização criada, nenhuma limpeza real executada',
    suzy: 'PurgeX está em modo simulação. A versão real só deve existir com pré-visualização, confirmação e logs.'
  },
  suzy: {
    log: '&gt; Suzy: regra operacional carregada com sucesso',
    suzy: 'Eu só recomendo automação segura, reversível e explicada antes da execução.'
  }
};

function registerCommand(button) {
  button.addEventListener('click', () => {
    const command = button.dataset.command;
    const message = messages[command];

    if (!message || !terminalLog || !suzyText) return;

    terminalLog.insertAdjacentHTML('beforeend', `<p>${message.log}</p>`);
    suzyText.textContent = message.suzy;
    terminalLog.scrollTop = terminalLog.scrollHeight;
  });
}

document.querySelectorAll('[data-command]').forEach(registerCommand);
