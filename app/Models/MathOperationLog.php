<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Database\Factories\MathOperationLogFactory;

class MathOperationLog extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected static function newFactory()
    {
        return MathOperationLogFactory::new();
    }
}
