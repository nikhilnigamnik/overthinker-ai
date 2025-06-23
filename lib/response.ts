export function handleError(message: string, status: number = 500) {
  return Response.json({ error: message }, { status });
}

export function handleSuccess(data: any, status: number = 200) {
  return Response.json(data, { status });
}
