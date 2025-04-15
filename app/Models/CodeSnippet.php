<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Support\Str;

class CodeSnippet extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'CodingLanguage',
        'content',
        'description',
        'visibility',
    ];

    protected static function booted()
    {
        static::creating(function ($snippet) {
            $snippet->slug = Str::random(10); // bijvoorbeeld: "x7a9b1cd0e"
        });
    }
}