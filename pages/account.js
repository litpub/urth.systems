import { useState } from 'react'

export default() => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: ''
  })

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const json = await res.json()
    handleResponse(res.status, json)
  }

  const handleResponse = (status, json) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: json.token }
      })
    } else {
      setStatus({
        info: { error: true, msg: json.error }
      })
    }
  }

  return (
    <div className="container mx-auto px-4">
      <section className="mt-10 flex flex-col text-center">
        <section className="flex-1">
          <h1 className="md:text-huge text-9xl font-bold leading-none">
            urth
          </h1>

          <h2 className="md:text-4xl text-2xl font-bold mb-2">
            Manage Your Account
          </h2>
          
          {status.submitted && (
            <p>
              Check your email, we've sent you a login link
            </p>
          )}
        </section>
        <section className="flex-1">
          {!status.submitted && (
            <div>
              <p className="m-4">Please provide the email belonging to your subscription.</p>
              <form onSubmit={handleOnSubmit} className="px-8 pt-6 pb-8 mb-4">
                <div className="mb-4 text-left">
                  <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                    placeholder="Email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button type="submit" disabled={status.submitting} className="bg-white text-black hover:bg-gray-200 font-bold px-6 py-2 rounded focus:outline-none focus:shadow-outline">
                  {!status.submitting
                    ? !status.submitted
                      ? 'Submit'
                      : 'Submitted'
                    : 'Submitting...'}
                </button>
              </form>
            </div>
          )}
          {status.info.error && (
            <div className="error">{status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
        </section>
      </section>
    </div>
  )
}