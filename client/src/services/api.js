const API_BASE = '/api';

async function request(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || data.error || `HTTP ${res.status}`);
  }
  return data;
}

export async function getServices() {
  const d = await request('/services.php');
  return d.services || [];
}

export async function createAppointment(body) {
  return request('/appointments.php', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export async function submitContact(body) {
  return request('/contacts.php', {
    method: 'POST',
    body: JSON.stringify(body),
  });
}
