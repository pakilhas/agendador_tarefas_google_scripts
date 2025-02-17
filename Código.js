// Função para exibir a interface
function doGet() {
  return HtmlService.createHtmlOutputFromFile('ui')
    .setTitle('Agendador de Tarefas e Reuniões')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Função para criar um evento no Google Agenda
function criarEvento(titulo, descricao, data, participantes) {
  try {
    const agenda = CalendarApp.getDefaultCalendar();
    const evento = agenda.createEvent(titulo, new Date(data), new Date(data), {
      description: descricao,
      guests: participantes.join(','), // Adiciona participantes
      sendInvites: true // Envia convites
    });

    Logger.log("Evento criado: " + evento.getId());
    return evento.getId();
  } catch (e) {
    Logger.log("Erro ao criar evento: " + e.message);
    throw e;
  }
}