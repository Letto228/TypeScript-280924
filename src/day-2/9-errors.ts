try {
    throw '';
    throw {};
    throw 123;
    throw null;
    throw new Error('Error');
} catch(error: unknown) {
    if (error instanceof Error) {
        error.message;
    }
}