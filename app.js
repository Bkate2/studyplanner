// App State & Configuration
const SYSTEM_DATE = '2026-06-22'; // Hardcoded base reference date matching user mockup

let state = {
    tasks: [],
    dayLogs: [],
    sortColumn: 'deadline',
    sortAsc: true
};

// Seed Data
const defaultTasks = [
    { id: '1', subject: 'PAMT', name: 'Week 5: Walter Benjamin', status: 'In Progress', deadline: '2026-06-20', notes: '' },
    { id: '2', subject: 'PAMT', name: 'Week 7: Modernism', status: 'Not Started', deadline: '2026-06-20', notes: '' },
    { id: '3', subject: 'PAMT', name: 'Week 8: Cybernetics, Technofeminism, Surveillance', status: 'Not Started', deadline: '2026-06-20', notes: '' },
    { id: '4', subject: 'PAMT', name: 'Essay PAMT', status: 'Not Started', deadline: '2026-06-24', notes: '' },
    { id: '5', subject: 'Numerieke Wiskunde', name: 'Herhalen stof H1-H7', status: 'Completed', deadline: '2026-06-25', notes: 'https://www.youtube.com/watch?v=QBeNXHrAYnU' },
    { id: '6', subject: 'Numerieke Wiskunde', name: 'L8', status: 'Completed', deadline: '2026-06-25', notes: '' },
    { id: '7', subject: 'Numerieke Wiskunde', name: 'L9', status: 'Completed', deadline: '2026-06-25', notes: '' },
    { id: '8', subject: 'Numerieke Wiskunde', name: 'L10', status: 'In Progress', deadline: '2026-06-25', notes: '' },
    { id: '9', subject: 'Numerieke Wiskunde', name: 'L11', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '10', subject: 'Numerieke Wiskunde', name: 'L12', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '11', subject: 'Numerieke Wiskunde', name: 'Formuleblad 1 kantje schrijven dmv gem', status: 'In Progress', deadline: '2026-06-25', notes: '' },
    { id: '12', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2025 juli', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '13', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '14', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2025 juni', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '15', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '16', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2024 juli', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '17', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '18', subject: 'Numerieke Wiskunde', name: 'Oefententamen 2024 juni', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '19', subject: 'Numerieke Wiskunde', name: 'Feebackloop', status: 'Not Started', deadline: '2026-06-25', notes: '' },
    { id: '20', subject: 'PAMT', name: 'Herschrijven CRR1 in eigenwoorden zelfde idee', status: 'In Progress', deadline: '2026-07-24', notes: '' },
    { id: '21', subject: 'Work', name: 'working', status: 'In Progress', deadline: '2026-06-22', notes: '' },
    { id: '22', subject: 'Hydrologie', name: 'Hydrologie Deeltentamen 2', status: 'Completed', deadline: '2026-06-12', notes: '' },
    { id: '23', subject: 'Waterbouwkunde', name: 'Waterbouwkunde Exam', status: 'Completed', deadline: '2026-06-19', notes: '' },
    { id: '24', subject: 'Hydrologie', name: 'Introductie Hydrologie doorlezen', status: 'Completed', deadline: '2026-06-08', notes: '' }
];

const defaultDayLogs = [
    { date: '2026-06-05', focus: 'creating planning', extra: 'hydrology' },
    { date: '2026-06-06', focus: '--', extra: '' },
    { date: '2026-06-07', focus: '--', extra: '' },
    { date: '2026-06-08', focus: 'Numerical math Ch 1 u/t 7 + practical', extra: 'Hydrology' },
    { date: '2026-06-09', focus: 'Werken', extra: '' },
    { date: '2026-06-10', focus: 'Hydrologie', extra: '' },
    { date: '2026-06-11', focus: 'Werken', extra: '' },
    { date: '2026-06-12', focus: '--', extra: '' },
    { date: '2026-06-13', focus: '--', extra: '' },
    { date: '2026-06-14', focus: '--', extra: '' },
    { date: '2026-06-15', focus: 'Werken', extra: 'Filosofie week 5/7?' },
    { date: '2026-06-16', focus: 'Alle waterbouw colleges kijken(5.5 lecuters)', extra: '' },
    { date: '2026-06-17', focus: 'Starten met oefententamens maken', extra: 'na lunch formule blad maken' },
    { date: '2026-06-18', focus: 'Oefententamens maken met focus op knelpunten dagen ervoor', extra: '' },
    { date: '2026-06-19', focus: 'Preperation exam Waterbouwkunde', extra: 'Inlezen PAMT' },
    { date: '2026-06-20', focus: '--', extra: '' },
    { date: '2026-06-21', focus: '--', extra: '' },
    { date: '2026-06-22', focus: 'Werken', extra: '' },
    { date: '2026-06-23', focus: '--', extra: '' },
    { date: '2026-06-24', focus: '--', extra: '' },
    { date: '2026-06-25', focus: '--', extra: '' },
    { date: '2026-06-26', focus: '--', extra: '' },
    { date: '2026-06-27', focus: '--', extra: '' },
    { date: '2026-06-28', focus: '--', extra: '' },
    { date: '2026-06-29', focus: '--', extra: '' },
    { date: '2026-06-30', focus: '--', extra: '' }
];

// Chart Instancing references
let doughnutChart = null;
let barChart = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initEventListeners();
    renderAll();
    lucide.createIcons();
});

// State Management
function loadState() {
    const savedTasks = localStorage.getItem('sp_tasks');
    const savedLogs = localStorage.getItem('sp_daylogs');

    if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
    } else {
        state.tasks = [...defaultTasks];
        saveTasksToStorage();
    }

    if (savedLogs) {
        state.dayLogs = JSON.parse(savedLogs);
    } else {
        state.dayLogs = [...defaultDayLogs];
        saveLogsToStorage();
    }
}

function saveTasksToStorage() {
    localStorage.setItem('sp_tasks', JSON.stringify(state.tasks));
}

function saveLogsToStorage() {
    localStorage.setItem('sp_daylogs', JSON.stringify(state.dayLogs));
}

// Subject css class generator
function getSubjectClass(subject) {
    if (!subject) return 'default';
    const subClean = subject.toLowerCase().trim();
    if (subClean.includes('pamt')) return 'pamt';
    if (subClean.includes('wiskunde') || subClean.includes('math')) return 'numerieke-wiskunde';
    if (subClean.includes('waterbouw')) return 'waterbouwkunde';
    if (subClean.includes('hydrologie') || subClean.includes('hydrology')) return 'hydrologie';
    if (subClean.includes('work') || subClean.includes('werken')) return 'work';
    return 'default';
}

// Date Formatting helpers
function parseLocalDate(dateStr) {
    // Treat date as local date to prevent timezone shifts
    const parts = dateStr.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatDateFriendly(dateStr) {
    const date = parseLocalDate(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function formatDateShort(dateStr) {
    const date = parseLocalDate(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// Event Listeners initialization
function initEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.currentTarget.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // Logo clicks returns to Dashboard
    document.getElementById('headerLogo').addEventListener('click', () => {
        switchTab('dashboard');
    });

    // Today Widget Focus Edit
    document.getElementById('btnEditToday').addEventListener('click', () => {
        openTodayModal();
    });

    document.getElementById('formEditToday').addEventListener('submit', (e) => {
        e.preventDefault();
        saveTodayFocus();
    });

    // Task CRUD actions
    document.getElementById('btnAddTask').addEventListener('click', () => {
        openTaskModal();
    });

    document.getElementById('formTask').addEventListener('submit', (e) => {
        e.preventDefault();
        saveTask();
    });

    // Close Modals
    document.querySelectorAll('[data-close]').forEach(button => {
        button.addEventListener('click', (e) => {
            const modalId = e.currentTarget.getAttribute('data-close');
            closeModal(modalId);
        });
    });

    // Close modals on overlay clicks
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });

    // Task filters and search
    document.getElementById('filterSubject').addEventListener('change', () => renderTasksTable());
    document.getElementById('filterStatus').addEventListener('change', () => renderTasksTable());
    document.getElementById('searchTask').addEventListener('input', () => renderTasksTable());

    // Sorting headers
    document.querySelectorAll('.tasks-table th.sortable').forEach(th => {
        th.addEventListener('click', (e) => {
            const col = e.currentTarget.getAttribute('data-sort');
            if (state.sortColumn === col) {
                state.sortAsc = !state.sortAsc;
            } else {
                state.sortColumn = col;
                state.sortAsc = true;
            }
            renderTasksTable();
        });
    });
}

// Tab Switching
function switchTab(tabId) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

    const activeTab = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
    const activePane = document.getElementById(`pane-${tabId}`);

    if (activeTab) activeTab.classList.add('active');
    if (activePane) activePane.classList.add('active');

    // Trigger chart redraw when switching back to dashboard to ensure responsiveness
    if (tabId === 'dashboard') {
        renderDashboardCharts();
    }
}

// Render Engine
function renderAll() {
    renderHeaderProgress();
    renderTodayWidget();
    renderMetricCards();
    renderDashboardCharts();
    renderUpcomingDeadlines();
    populateFilters();
    renderTasksTable();
    renderDayPlanner();
}

function renderHeaderProgress() {
    const total = state.tasks.length;
    const completed = state.tasks.filter(t => t.status === 'Completed').length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    document.getElementById('headerProgressText').innerText = `${completed}/${total} done`;
    document.getElementById('headerProgressPct').innerText = `${pct}%`;
    document.getElementById('headerProgressBar').style.width = `${pct}%`;
}

function renderTodayWidget() {
    const todayLog = state.dayLogs.find(l => l.date === SYSTEM_DATE);
    const dateLabel = formatDateFriendly(SYSTEM_DATE);
    
    document.getElementById('todayDateLabel').innerText = `TODAY - ${dateLabel.toUpperCase()}`;
    document.getElementById('todayFocusText').innerText = todayLog ? todayLog.focus : 'No focus set';
}

function renderMetricCards() {
    const total = state.tasks.length;
    const completed = state.tasks.filter(t => t.status === 'Completed').length;
    const active = state.tasks.filter(t => t.status === 'In Progress').length;
    const todo = state.tasks.filter(t => t.status === 'Not Started').length;

    const completedPct = total > 0 ? Math.round((completed / total) * 100) : 0;
    const activePct = total > 0 ? Math.round((active / total) * 100) : 0;
    const todoPct = total > 0 ? Math.round((todo / total) * 100) : 0;

    document.getElementById('metricTotalVal').innerText = total;
    
    document.getElementById('metricDoneVal').innerText = completed;
    document.getElementById('metricDoneBar').style.width = `${completedPct}%`;
    document.getElementById('metricDonePct').innerText = `${completedPct}%`;

    document.getElementById('metricActiveVal').innerText = active;
    document.getElementById('metricActiveBar').style.width = `${activePct}%`;
    document.getElementById('metricActivePct').innerText = `${activePct}%`;

    document.getElementById('metricTodoVal').innerText = todo;
    document.getElementById('metricTodoBar').style.width = `${todoPct}%`;
    document.getElementById('metricTodoPct').innerText = `${todoPct}%`;
}

function renderUpcomingDeadlines() {
    const container = document.getElementById('upcomingDeadlinesList');
    container.innerHTML = '';

    // Show non-completed tasks sorted by deadline
    const pendingTasks = state.tasks
        .filter(t => t.status !== 'Completed')
        .map(t => {
            const diffTime = parseLocalDate(t.deadline) - parseLocalDate(SYSTEM_DATE);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return { ...t, daysRemaining: diffDays };
        })
        .sort((a, b) => a.daysRemaining - b.daysRemaining);

    if (pendingTasks.length === 0) {
        container.innerHTML = '<div class="deadline-item"><span class="deadline-name">No upcoming deadlines! 🎉</span></div>';
        return;
    }

    pendingTasks.forEach(task => {
        const item = document.createElement('div');
        item.className = 'deadline-item';

        const left = document.createElement('div');
        left.className = 'deadline-left';

        const subClass = getSubjectClass(task.subject);
        const badge = document.createElement('span');
        badge.className = `subject-badge ${subClass}`;
        badge.innerText = task.subject;

        const name = document.createElement('span');
        name.className = 'deadline-name';
        name.innerText = task.name;

        left.appendChild(badge);
        left.appendChild(name);

        const right = document.createElement('div');
        right.className = 'deadline-right';

        const days = document.createElement('span');
        days.className = 'deadline-days';
        
        if (task.daysRemaining === 0) {
            days.innerText = 'Today!';
            days.classList.add('urgent');
        } else if (task.daysRemaining === 1) {
            days.innerText = '1d';
            days.classList.add('urgent');
        } else if (task.daysRemaining < 0) {
            days.innerText = `${Math.abs(task.daysRemaining)}d ago`;
            days.classList.add('urgent');
        } else {
            days.innerText = `${task.daysRemaining}d`;
            if (task.daysRemaining <= 3) {
                days.classList.add('warning');
            }
        }

        const completeBtn = document.createElement('button');
        completeBtn.className = 'btn-complete-task';
        completeBtn.title = 'Mark as completed';
        completeBtn.innerHTML = '<i data-lucide="check"></i>';
        completeBtn.addEventListener('click', () => {
            toggleTaskStatus(task.id);
        });

        right.appendChild(days);
        right.appendChild(completeBtn);

        item.appendChild(left);
        item.appendChild(right);
        container.appendChild(item);
    });

    lucide.createIcons();
}

function renderDashboardCharts() {
    const total = state.tasks.length;
    const completed = state.tasks.filter(t => t.status === 'Completed').length;
    const active = state.tasks.filter(t => t.status === 'In Progress').length;
    const todo = state.tasks.filter(t => t.status === 'Not Started').length;

    const completedPct = total > 0 ? Math.round((completed / total) * 100) : 0;
    document.getElementById('donutPercentText').innerText = `${completedPct}%`;

    // 1. Doughnut Chart (Status Breakdown)
    const ctxDoughnut = document.getElementById('chartStatusBreakdown').getContext('2d');
    if (doughnutChart) {
        doughnutChart.destroy();
    }
    doughnutChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In Progress', 'Not Started'],
            datasets: [{
                data: [completed, active, todo],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverOffset: 4
            }]
        },
        options: {
            cutout: '75%',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // We use our own custom Legend in HTML styling or standard
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += context.raw;
                            const pct = total > 0 ? Math.round((context.raw / total) * 100) : 0;
                            label += ` (${pct}%)`;
                            return label;
                        }
                    }
                }
            }
        }
    });

    // 2. Stacked Bar Chart (Progress per Subject)
    // Gather all unique subjects
    const subjectsSet = new Set(state.tasks.map(t => t.subject));
    const subjects = Array.from(subjectsSet);

    const completedData = [];
    const activeData = [];
    const todoData = [];

    subjects.forEach(sub => {
        const subTasks = state.tasks.filter(t => t.subject === sub);
        completedData.push(subTasks.filter(t => t.status === 'Completed').length);
        activeData.push(subTasks.filter(t => t.status === 'In Progress').length);
        todoData.push(subTasks.filter(t => t.status === 'Not Started').length);
    });

    const ctxBar = document.getElementById('chartProgressSubject').getContext('2d');
    if (barChart) {
        barChart.destroy();
    }
    barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: subjects,
            datasets: [
                {
                    label: 'Completed',
                    data: completedData,
                    backgroundColor: '#10b981',
                    borderRadius: 4
                },
                {
                    label: 'In Progress',
                    data: activeData,
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                },
                {
                    label: 'Not Started',
                    data: todoData,
                    backgroundColor: '#ef4444',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: {
                        color: '#475569',
                        font: { family: 'Inter', weight: '600', size: 11 }
                    }
                },
                y: {
                    stacked: true,
                    grid: { color: '#f1f5f9' },
                    ticks: {
                        precision: 0,
                        color: '#475569',
                        font: { family: 'Inter', size: 11 }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 20,
                        color: '#475569',
                        font: { family: 'Inter', weight: '600', size: 12 }
                    }
                }
            }
        }
    });
}

function populateFilters() {
    const select = document.getElementById('filterSubject');
    const currentValue = select.value;
    
    // Clear dynamic options
    select.innerHTML = '<option value="all">All Subjects</option>';

    // Get unique subjects
    const subjects = Array.from(new Set(state.tasks.map(t => t.subject))).sort();
    
    subjects.forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.innerText = sub;
        select.appendChild(opt);
    });

    if (subjects.includes(currentValue)) {
        select.value = currentValue;
    }
}

// Tasks Table render
function renderTasksTable() {
    const tbody = document.getElementById('tasksTableBody');
    const emptyState = document.getElementById('tableEmptyState');
    tbody.innerHTML = '';

    const filterSub = document.getElementById('filterSubject').value;
    const filterStat = document.getElementById('filterStatus').value;
    const searchVal = document.getElementById('searchTask').value.toLowerCase().trim();

    // 1. Filter
    let filteredTasks = state.tasks.filter(task => {
        const matchesSubject = filterSub === 'all' || task.subject === filterSub;
        const matchesStatus = filterStat === 'all' || task.status === filterStat;
        const matchesSearch = searchVal === '' || 
            task.name.toLowerCase().includes(searchVal) || 
            task.subject.toLowerCase().includes(searchVal) ||
            task.notes.toLowerCase().includes(searchVal);
        return matchesSubject && matchesStatus && matchesSearch;
    });

    // 2. Sort
    filteredTasks.sort((a, b) => {
        let valA = a[state.sortColumn] || '';
        let valB = b[state.sortColumn] || '';

        if (state.sortColumn === 'deadline') {
            // Sort by date value
            valA = new Date(valA);
            valB = new Date(valB);
        } else {
            valA = valA.toString().toLowerCase();
            valB = valB.toString().toLowerCase();
        }

        if (valA < valB) return state.sortAsc ? -1 : 1;
        if (valA > valB) return state.sortAsc ? 1 : -1;
        return 0;
    });

    // Toggle Empty State
    if (filteredTasks.length === 0) {
        emptyState.style.display = 'block';
        document.querySelector('.tasks-table').style.display = 'none';
        return;
    } else {
        emptyState.style.display = 'none';
        document.querySelector('.tasks-table').style.display = 'table';
    }

    filteredTasks.forEach(task => {
        const tr = document.createElement('tr');
        tr.id = `task-row-${task.id}`;

        // Subject
        const tdSub = document.createElement('td');
        const badge = document.createElement('span');
        badge.className = `subject-badge ${getSubjectClass(task.subject)}`;
        badge.innerText = task.subject;
        tdSub.appendChild(badge);
        tr.appendChild(tdSub);

        // Task Name
        const tdName = document.createElement('td');
        tdName.innerText = task.name;
        tr.appendChild(tdName);

        // Status
        const tdStatus = document.createElement('td');
        const statusPill = document.createElement('span');
        const statClass = task.status.toLowerCase().replace(' ', '-');
        statusPill.className = `status-pill ${statClass}`;
        
        let iconHtml = '';
        if (task.status === 'Completed') iconHtml = '<i data-lucide="check-circle-2"></i>';
        else if (task.status === 'In Progress') iconHtml = '<i data-lucide="clock"></i>';
        else iconHtml = '<i data-lucide="circle"></i>';

        statusPill.innerHTML = `${iconHtml} ${task.status}`;
        tdStatus.appendChild(statusPill);
        tr.appendChild(tdStatus);

        // Deadline
        const tdDeadline = document.createElement('td');
        tdDeadline.innerText = formatDateShort(task.deadline);
        tr.appendChild(tdDeadline);

        // Notes (Convert links)
        const tdNotes = document.createElement('td');
        tdNotes.innerHTML = linkify(task.notes);
        tr.appendChild(tdNotes);

        // Actions
        const tdActions = document.createElement('td');
        tdActions.className = 'text-right';
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'table-actions';

        const editBtn = document.createElement('button');
        editBtn.title = 'Edit Task';
        editBtn.innerHTML = '<i data-lucide="edit"></i>';
        editBtn.addEventListener('click', () => openTaskModal(task));

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-delete';
        deleteBtn.title = 'Delete Task';
        deleteBtn.innerHTML = '<i data-lucide="trash-2"></i>';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        tdActions.appendChild(actionsDiv);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    });

    lucide.createIcons();
}

function linkify(text) {
    if (!text) return '';
    const urlPattern = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlPattern, '<a href="$1" target="_blank" class="table-notes-link">$1</a>');
}

// Day Planner Timeline rendering
function renderDayPlanner() {
    const container = document.getElementById('timelineDaysContainer');
    container.innerHTML = '';

    // Sort logs chronologically
    const sortedLogs = [...state.dayLogs].sort((a, b) => a.date.localeCompare(b.date));

    sortedLogs.forEach(log => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        if (log.date === SYSTEM_DATE) {
            card.classList.add('today');
        }

        // Date Column
        const dateCol = document.createElement('div');
        dateCol.className = 'timeline-date-container';
        const dateText = document.createElement('span');
        dateText.className = 'timeline-date';
        dateText.innerText = formatDateFriendly(log.date);
        dateCol.appendChild(dateText);

        if (log.date === SYSTEM_DATE) {
            const todayBadge = document.createElement('span');
            todayBadge.className = 'today-badge';
            todayBadge.innerText = 'Today';
            dateCol.appendChild(todayBadge);
        }
        card.appendChild(dateCol);

        // Focus of the Day Column (Inline editable)
        const focusCol = document.createElement('div');
        focusCol.className = 'timeline-input-wrapper';
        const focusInput = document.createElement('input');
        focusInput.type = 'text';
        focusInput.className = 'timeline-input';
        focusInput.value = log.focus === '--' ? '' : log.focus;
        focusInput.placeholder = 'Add focus of the day...';
        focusInput.addEventListener('change', (e) => {
            updateDayFocus(log.date, 'focus', e.target.value);
        });
        focusCol.appendChild(focusInput);
        card.appendChild(focusCol);

        // Extra Focus Column (Inline editable)
        const extraCol = document.createElement('div');
        extraCol.className = 'timeline-input-wrapper';
        const extraInput = document.createElement('input');
        extraInput.type = 'text';
        extraInput.className = 'timeline-input';
        extraInput.value = log.extra;
        extraInput.placeholder = 'Add extra focus...';
        extraInput.addEventListener('change', (e) => {
            updateDayFocus(log.date, 'extra', e.target.value);
        });
        extraCol.appendChild(extraInput);
        card.appendChild(extraCol);

        // Milestones Column (Tasks with matching deadline)
        const milesCol = document.createElement('div');
        milesCol.className = 'timeline-milestones';

        const dayMilestones = state.tasks.filter(t => t.deadline === log.date);

        if (dayMilestones.length === 0) {
            milesCol.innerHTML = '<span class="text-muted" style="font-size:0.75rem; font-style:italic;">No milestones</span>';
        } else {
            dayMilestones.forEach(ms => {
                const badge = document.createElement('span');
                const isCompleted = ms.status === 'Completed';
                badge.className = `milestone-badge ${isCompleted ? 'completed' : ''}`;
                
                const icon = isCompleted ? '<i data-lucide="check-circle-2"></i>' : '<i data-lucide="alert-circle"></i>';
                badge.innerHTML = `${icon} ${ms.subject}: ${ms.name}`;
                badge.title = `Status: ${ms.status}`;
                milesCol.appendChild(badge);
            });
        }
        card.appendChild(milesCol);

        container.appendChild(card);
    });

    lucide.createIcons();
}

// Inline update logic for Day Planner
function updateDayFocus(dateStr, field, value) {
    const valClean = value.trim() === '' ? '--' : value.trim();
    const log = state.dayLogs.find(l => l.date === dateStr);
    
    if (log) {
        log[field] = field === 'focus' && valClean === '' ? '--' : value.trim();
    } else {
        state.dayLogs.push({
            date: dateStr,
            focus: field === 'focus' ? valClean : '--',
            extra: field === 'extra' ? valClean : ''
        });
    }

    saveLogsToStorage();
    if (dateStr === SYSTEM_DATE) {
        renderTodayWidget();
    }
}

// Modals controller
function openTodayModal() {
    const todayLog = state.dayLogs.find(l => l.date === SYSTEM_DATE);
    
    document.getElementById('inputTodayFocus').value = todayLog && todayLog.focus !== '--' ? todayLog.focus : '';
    document.getElementById('inputTodayExtra').value = todayLog ? todayLog.extra : '';
    
    document.getElementById('modalEditToday').classList.add('active');
}

function saveTodayFocus() {
    const focusVal = document.getElementById('inputTodayFocus').value.trim();
    const extraVal = document.getElementById('inputTodayExtra').value.trim();

    updateDayFocus(SYSTEM_DATE, 'focus', focusVal === '' ? '--' : focusVal);
    updateDayFocus(SYSTEM_DATE, 'extra', extraVal);

    closeModal('modalEditToday');
    renderTodayWidget();
    renderDayPlanner();
}

function openTaskModal(task = null) {
    const form = document.getElementById('formTask');
    form.reset();

    if (task) {
        // Edit Mode
        document.getElementById('taskModalTitle').innerText = 'Edit Task';
        document.getElementById('taskInputId').value = task.id;
        document.getElementById('taskInputSubject').value = task.subject;
        document.getElementById('taskInputStatus').value = task.status;
        document.getElementById('taskInputName').value = task.name;
        document.getElementById('taskInputDeadline').value = task.deadline;
        document.getElementById('taskInputNotes').value = task.notes;
    } else {
        // Add Mode
        document.getElementById('taskModalTitle').innerText = 'Add New Task';
        document.getElementById('taskInputId').value = '';
        document.getElementById('taskInputStatus').value = 'Not Started';
        document.getElementById('taskInputDeadline').value = SYSTEM_DATE; // default to today
    }

    document.getElementById('modalTask').classList.add('active');
}

function saveTask() {
    const id = document.getElementById('taskInputId').value;
    const subject = document.getElementById('taskInputSubject').value.trim();
    const status = document.getElementById('taskInputStatus').value;
    const name = document.getElementById('taskInputName').value.trim();
    const deadline = document.getElementById('taskInputDeadline').value;
    const notes = document.getElementById('taskInputNotes').value.trim();

    if (id) {
        // Update existing task
        const taskIdx = state.tasks.findIndex(t => t.id === id);
        if (taskIdx > -1) {
            state.tasks[taskIdx] = { id, subject, status, name, deadline, notes };
        }
    } else {
        // Add new task
        const newId = Date.now().toString();
        state.tasks.push({ id: newId, subject, status, name, deadline, notes });
    }

    saveTasksToStorage();
    closeModal('modalTask');
    renderAll();
}

function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        state.tasks = state.tasks.filter(t => t.id !== id);
        saveTasksToStorage();
        renderAll();
    }
}

function toggleTaskStatus(id) {
    const task = state.tasks.find(t => t.id === id);
    if (task) {
        task.status = task.status === 'Completed' ? 'In Progress' : 'Completed';
        saveTasksToStorage();
        renderAll();
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}
