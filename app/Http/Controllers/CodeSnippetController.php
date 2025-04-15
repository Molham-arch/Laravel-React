<?php

namespace App\Http\Controllers;

use App\Models\CodeSnippet;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CodeSnippetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(CodeSnippet::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response()->json(['message' => 'Toon snippet aanmaakformulier']);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'CodingLanguage' => 'required|string|max:50',
            'content' => 'required|string',
            'description' => 'nullable|string',
            'visibility' => 'required|integer|in:1,2,3', // ✅ toevoegen
        ]);

        $snippet = CodeSnippet::create([
            ...$validated,
            'slug' => Str::random(8),
        ]);

        return redirect()->route('snippets.show', $snippet->slug)
            ->with('success', 'Snippet succesvol aangemaakt!');
    }


    /**
     * Display the specified resource (by slug).
     */
    public function show($slug)
    {
        $snippet = CodeSnippet::where('slug', $slug)->firstOrFail();

        return response()->json($snippet);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        $snippet = CodeSnippet::where('slug', $slug)->firstOrFail();

        return response()->json([
            'message' => 'Bewerk snippet',
            'snippet' => $snippet
        ]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, $slug)
    {
        $snippet = CodeSnippet::where('slug', $slug)->firstOrFail();

        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'description' => 'nullable|string',
            'CodingLanguage' => 'required|string',
            'visibility' => 'required|integer|in:1,2,3', // ✅ toevoegen
        ]);

        $snippet->update($validated);

        return redirect()->route('snippets.show', $snippet->slug)->with('message', 'Snippet updated!');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $snippet = CodeSnippet::where('slug', $slug)->firstOrFail();
        $snippet->delete();

        return redirect()->route('snippets.index')->with('success', 'Snippet verwijderd.');
    }
}
