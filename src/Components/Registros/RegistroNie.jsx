function Nie() {
    return (
        <section class="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600716887304-382af77ee86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}}>
            <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div class="grid  gap-8 grid-cols-1">
                    <div class="flex flex-col ">
                        <div class="flex flex-col sm:flex-row items-center">
                            <h2 class="font-semibold text-lg mr-auto">Ingresa tu NIE:</h2>
                            <div class="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                        </div>
                        <div class="mt-5">
                            <div class="form">
                                <div class="md:flex flex-row md:space-x-4 w-full text-xs">
                                    <div class="mb-3 space-y-2 w-full text-xs">
                                        <label class="font-semibold text-gray-600 py-2">NIE: <abbr
                                            title="required">*</abbr></label>
                                        <input placeholder="7132546965"
                                            class="appearance-none block w-full bg-darkmoss text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                            required="required" type="text" name="integration[shop_name]"
                                            id="integration_shop_name" />
                                        <p class="text-red text-xs hidden">Please fill out this field.</p>
                                    </div>

                                </div>
                                <p class="text-xs text-red-500 text-right my-3">El campo con asterisco es requerido <abbr title="Required field">*</abbr></p>
                                <div class="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                                    <button
                                        class="mb-2 md:mb-0 bg-bone px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                        Regresar </button>
                                    <button
                                        class="mb-2 md:mb-0 bg-sushi px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-greeny">Registrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </section>

    )
}

export default Nie;