import { Link, useRouteError, isRouteErrorResponse } from "@remix-run/react";

export default function GeneralErrorBoundary() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error)
    ? error.data
    : "Algo salió mal en el concierto";

  // Envuelve el contenido en el Layout
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 text-9xl animate-bounce">🎸</div>
        <h1 className="text-4xl font-bold text-white mb-4">
          ¡Ups! La música se detuvo
        </h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <p className="text-xl text-gray-300 mb-4">
            Parece que nuestro amplificador se sobrecalentó...
          </p>
          <p className="text-gray-400 font-mono bg-black/30 p-3 rounded">
            {errorMessage}
          </p>
        </div>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            reloadDocument
          >
            Volver al escenario principal 🎵
          </Link>
          <p className="text-gray-400">
            Error #{isRouteErrorResponse(error) ? error.status : "500"}- El
            técnico de sonido ya fue notificado
          </p>
        </div>
      </div>
    </div>
  );
}
