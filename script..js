// ============================================
// FUNÇÕES GLOBAIS - PERFIL COMPORTAMENTAL
// ============================================

// Configuração do Supabase
const SUPABASE_URL = "https://afoirnevaxsmdsjqijdx.supabase.co";
const SUPABASE_KEY = "sb_publishable_bw3-Nmv8Js7itGSg6k4btw_wY7wE960";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função para verificar se está logado
function verificarLogin() {
    const gestor = localStorage.getItem("gestorLogado");
    if (!gestor) {
        window.location.href = "index.html";
        return null;
    }
    return JSON.parse(gestor);
}

// Função para sair
function fazerLogout() {
    localStorage.removeItem("gestorLogado");
    window.location.href = "index.html";
}

// Função para formatar data
function formatarData(data) {
    return new Date(data).toLocaleDateString('pt-BR');
}

// Função para obter badge do perfil
function getBadgePerfil(perfil) {
    if (!perfil) return '-';
    if (perfil.includes('Executor')) return '<span class="badge-executor">⚡ ' + perfil + '</span>';
    if (perfil.includes('Administrador')) return '<span class="badge-administrador">📊 ' + perfil + '</span>';
    if (perfil.includes('Planejador')) return '<span class="badge-planejador">🎯 ' + perfil + '</span>';
    if (perfil.includes('+')) return '<span class="badge-hibrido">🔄 ' + perfil + '</span>';
    return perfil;
}